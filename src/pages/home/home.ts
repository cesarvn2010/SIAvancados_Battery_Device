import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Registro } from '../../models/registro.model';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Level: any = 0;
  //Plug: string = 'teste';
  //dataHoraLeitura : string = 'teste';

  private PATH = 'BatteryStatus/';

  registro: Registro;
  l : number = 0 ;
  dhl : string = '';
  p : string = '';
  colorS : string = 'black';

  
  
  constructor(public navCtrl: NavController,
    private batteryStatus: BatteryStatus,
    public navParams: NavParams,
    private db: AngularFireDatabase
  ) {
    this.lerBateria();
  }

  lerBateria(){

   
    this.batteryStatus.onChange().subscribe(
      (status) => {
        this.l = status.level;
        if(this.l>=30 && this.l <=100){
          this.colorS = 'green';
        }
        if(this.l>=15 && this.l <=29){
          this.colorS = 'yellow';
        }
        if(this.l>=0 && this.l <=14){
          this.colorS = 'red';
        }
       
        let dataAtual : Date =  new Date();

        this.dhl = dataAtual.getDate().toString() +'/'
        + dataAtual.getMonth().toString()+'/'
        +dataAtual.getFullYear().toString()+
        ' '+dataAtual.getHours().toString()+':'
        +dataAtual.getMinutes().toString() ;

        if(status.isPlugged == true){
          this.p = "Plugado";
        }
        else{
          this.p = "Não Plugado";
        }
        console.log(status.level, status.isPlugged);
      }
    );   
    
   return this.registro = {
      dataHoraLeitura: this.dhl,
      plug: this.p,
      situacao: this.l
    }
  }

  save( ) {
    return new Promise((resolve) => {
        this.lerBateria();
        this.db.list(this.PATH)
          .push(this.registro)
          .then(() => resolve());
    })
  }

}

