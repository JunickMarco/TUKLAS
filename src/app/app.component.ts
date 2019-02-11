import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private platform: Platform, private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private fcm: FcmProvider,
    public toastController: ToastController) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ionViewDidLoad() {
   this.fcm.getToken()
   this.fcm.listenToNotifications().pipe(
     tap(msg => {
       const toast = this.toastController.create({
         message: msg.body,
         duration: 3000
       })
       toast.present()
     })
   )
   .subscribe()
    }
}
