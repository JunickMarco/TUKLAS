import { FcmProvider } from './../../providers/fcm/fcm';
import { WordPage } from './../word/word';
import { Component } from '@angular/core';
import { NavController, Platform, ModalController, ViewController } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { query } from '@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //initialization for WOTD
  public viewWord: any;
  wordsCollection1: AngularFirestoreCollection<Note>;
  wordsWOTD: Observable<any[]>;
  numberCollection: AngularFirestoreCollection<RandomNumber>;
  randomNumber: Observable<any[]>;
  rand: any;
  random: number;
  // random: number;
  // rand: any;
  //initialization for speechrecognition
  private matches: Array<string>;
  isRecording = false;
  selectedItem: string = "";
  // public selectedItem: any;
  public selectedWord: any;
  client: any;
  index: any;
  ALGOLIA_APP_ID: string = "E4K2LLB4XB";
  ALGOLIA_APP_KEY: string = "0fdb807e39c747a9bd8ae696afb572e6";
  searchQuery: string = "";
  words = [];

  constructor(public navCtrl: NavController, private plt: Platform, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, private alertCtrl: AlertController, private afs: AngularFirestore, private storage: Storage, private http: HttpClient, public fcm: FcmProvider,
    public toastCtrl: ToastController, private modal: ModalController, private view: ViewController) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_APP_KEY, {
      protocol: 'https:'
    });

    this.index = this.client.initIndex("tuklas_WORDS")
    this.matches = [];
  }

  //searchbox
  search(event) {
    this.index.search({
      query: this.selectedItem
    }).then((data) => {
      console.log(data.hits);
      this.words = data.hits;


    })

  }
  //click suggested words in searchbox
  navigateToDetails(word) {
    this.selectedWord = word;
    console.log(word);
    this.navCtrl.push(WordPage, {
      'wordName': this.selectedWord.wordName,
      'audioFile': this.selectedWord.audioOut,
      'bayEq': this.selectedWord.bayEq,
      'copyrightDefFil': this.selectedWord.copyright.defFil,
      'copyrightDefEng': this.selectedWord.copyright.defEng,
      'copyrightSentSampl': this.selectedWord.copyright.sentSampl,
      'engDef': this.selectedWord.definition.engDef,
      'filDef': this.selectedWord.definition.filDef,
      'engEq': this.selectedWord.engEq,
      'engParos': this.selectedWord.partofspeech.engParos,
      'filParos': this.selectedWord.partofspeech.filParos,
      'sentences': this.selectedWord.sentences,
      'synonyms': this.selectedWord.synonyms
    });
  }
  //view word card of WOTD
  SwitchTab() {
    this.navCtrl.parent.select(1);
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

  }

  instModal(){
    const myModal = this.modal.create('ModalPage')
    myModal.present();
  }

 
}
