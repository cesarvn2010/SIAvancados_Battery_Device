import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Level:any = 0;
  Plug: string = '';

  constructor(public navCtrl: NavController,
    private batteryStatus: BatteryStatus
  ) {
    let subscription = batteryStatus.onChange().subscribe(
      (status) => {
        this.Level = status.level;
        if(status.isPlugged == true){
          this.Plug = "Plugado";
        }
        else{
          this.Plug = "Não Plugado";
        }
        console.log(status.level, status.isPlugged);
      }
    );
  }

  fireAdd(){
    
  }

}
