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
  s : number = 0 ;
  dhl : string = '';
  p : string = '';
  
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
        this.s = status.level;
        this.dhl = new Date().toISOString();
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
      situacao: this.s
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

  /*
  fireAdd()
    {
      const itemRef = this.db.object('BatteryStatus');
      itemRef.set(this.registro);
    }
*/
}

