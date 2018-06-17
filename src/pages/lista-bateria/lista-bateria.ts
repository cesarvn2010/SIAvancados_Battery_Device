import { Component, OnInit, Injectable, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ListaBateriaService } from '../../services/lista-bateria/lista-bateria.service';
import { Registro } from '../../models/registro.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the ListaBateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-lista-bateria',
  templateUrl: 'lista-bateria.html',
})
export class ListaBateriaPage{

  //registros: any;
  //items: Observable<any[]>;

  private PATH = 'BatteryStatus/';
  //@Input() registro: Registro;
  registros: Observable<any>;
 

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private toast: ToastController,
   //  private registroService: ListaBateriaService,
     private db: AngularFireDatabase
     
    ) {
      this.registros = this.getAll();
    }

    getAll() {
      return this.db.list(this.PATH, ref => ref.orderByChild('dataHoraLeitura'))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      }
    
    remove(key: string) {
      return this.db.list(this.PATH).remove(key);
    }
 
    removeRegistro(key: string) {
      if (key) {
        this.remove(key)
          .then(() => {
            this.toast.create({ message: 'Registro removido sucesso.', duration: 3000 }).present();
          })
          .catch(() => {
            this.toast.create({ message: 'Erro ao remover o registro.', duration: 3000 }).present();
          });
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaBateriaPage');
  }

}
