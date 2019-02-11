import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

interface Note {
  audioOut: string;
  bayEq: string;
  copyright: Map<string, string>;
  definition: Map<[string], [string]>;
  engEq: string;
  partsofspeech: Map<string, string>;
  sentences: [string];
  wordID: number;
  wordName: string;
}
interface RandomNumber {
  random: number;
}

@IonicPage()
@Component({
  selector: 'page-wotd',
  templateUrl: 'wotd.html',
})
export class WotdPage {
  numberCollection: AngularFirestoreCollection<RandomNumber>;
  randomNumber: Observable<any[]>;
  //initialization for WOTD
  public viewWord: any;
  wordsCollection1: AngularFirestoreCollection<Note>;
  wordsWOTD: Observable<any[]>;
  random: number;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private afs: AngularFirestore, private storage: Storage) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WotdPage');
  }


  @ViewChild("audio") audio;
  playAudio() {
    this.audio.nativeElement.play();
  }

  //generate WOTD
  ionViewDidEnter() {
    this.numberCollection = this.afs.collection('random', ref => {
      return ref
    });
    this.randomNumber = this.numberCollection.valueChanges();
    console.log(this.randomNumber)

    this.randomNumber.subscribe(res => {
      this.random = res[0].random
      console.log(this.random)
      this.wordsCollection1 = this.afs.collection('words', ref => {
        return ref.where("wordID", '==', this.random)
      });
      this.wordsWOTD = this.wordsCollection1.valueChanges();
      console.log(this.wordsWOTD)
    });
    // this.storage.ready().then(() => {
    // });
    // this.storage.get("tryy").then((tryy) => {
    //   console.log(tryy)
    //   this.wordsCollection1 = this.afs.collection('words', ref => {
    //     return ref.where("wordID", '==', tryy)
    //   });
    //   this.wordsWOTD = this.wordsCollection1.valueChanges();
    //   console.log(this.wordsWOTD)
    // });
  }

  //WOTD function

  // hasOneDayPassed() {
  //   var date = new Date().toLocaleDateString();

  //   if (localStorage.yourapp_date == date)
  //     return false;

  //   localStorage.yourapp_date = date;
  //   return true;
  // }

  // generateWord() {
  //   if (!this.hasOneDayPassed()) return false;
  //   this.random = Math.floor((Math.random() * 20) + 1);
  //   this.storage.set("tryy", this.random);
  // }
}
