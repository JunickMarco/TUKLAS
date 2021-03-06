// import { firebaseConfig } from './../../app/credentials';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from 'ionic-angular'
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(private firebaseNative: Firebase,
    private afs: AngularFirestore,
    private platform: Platform) { }

  async getToken(){
    let token;
    if (this.platform.is('android')){
      token = await this.firebaseNative.getToken()
    }
    if (this.platform.is('ios')){
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    }
    return this.saveTokenToFirestore(token)
  }
  private saveTokenToFirestore(token){
    if (!token) return;
    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'testUser'
    }
    return devicesRef.doc(token).set(docData)
  }
  listenToNotifications(){
    return this.firebaseNative.onNotificationOpen()
  }
}


