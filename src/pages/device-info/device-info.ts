import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';

/**
 * Generated class for the DeviceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-info',
  templateUrl: 'device-info.html',
})
export class DeviceInfoPage {

  uuid : string = "";
  v_cordova : string = "";
  modelo : string = "";
  plataforma : string = "";
  vso : string = "";
  fabricante : string = "";
  processador : string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private device: Device) {
      this.uuid = device.uuid.toString();
      this.v_cordova = device.cordova.toString();
      this.modelo = device.model.toString();
      this.plataforma = device.platform.toString();
      this.vso = device.version.toString();
      this.fabricante = device.manufacturer.toString();
      if(device.isVirtual== true){
        this.processador = "Emulador"
      }else{
        this.processador = "Serial"
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceInfoPage');
  }



}
