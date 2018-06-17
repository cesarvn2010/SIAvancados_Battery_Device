import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Device } from '@ionic-native/device';
import { ListaBateriaService } from '../services/lista-bateria/lista-bateria.service';
import { ToastrModule } from 'ngx-toastr';

export const firebaseConfig = {
  apiKey: "AIzaSyDRZN4glAZAKMWmDfGtOY6SLm6C6dlqwLE",
  authDomain: "siabateriastatus.firebaseapp.com",
  databaseURL: "https://siabateriastatus.firebaseio.com",
  projectId: "siabateriastatus",
  storageBucket: "siabateriastatus.appspot.com",
  messagingSenderId: "1088391370459"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BatteryStatus,
    Device,
    ListaBateriaService
  ]
})
export class AppModule {}
