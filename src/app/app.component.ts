import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav : Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Lista Battery Status', component: 'ListaBateriaPage'},
      {title: 'Device Infos', component: 'DeviceInfoPage'},
      {title: 'Fechar', component: 'Fechar'}
    ]
  }
    openPage(page){
      if (page.title == 'Fechar'){
        this.platform.exitApp();
      } else {
        this.nav.setRoot(page.component);
      }
    }
  }

