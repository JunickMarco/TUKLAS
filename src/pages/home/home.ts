import { FcmProvider } from './../../providers/fcm/fcm';
import { WordPage } from './../word/word';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
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

interface RandomNumber{
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
    public toastCtrl: ToastController, private splashScreen: SplashScreen,
    private statusBar: StatusBar,) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_APP_KEY, {
      protocol: 'https:'
    });

    this.index = this.client.initIndex("tuklas_WORDS")
    this.matches = [];

    // this.http.get('https://us-central1-thesis-6214c.cloudfunctions.net/sample').subscribe((response) => {
    //   console.log(response);
    //   this.rand = response;
    //   console.log(this.rand)
    // });
    // http.get('https://us-central1-thesis-6214c.cloudfunctions.net/corsEnabledFunction')
    //   .subscribe((data) => {
    //     console.log('data', data);
    //   })
    // this.rand = http.get(this.url, { 
    //   responseType: 'text' 
    // })
    // console.log(this.rand)
    // console.log(http.get(this.url, {
    //   responseType: 'text'
    // }))
    // plt.ready().then(() => {
    //   fcm.getToken()
    //   fcm.onNotifications().pipe(
    //     tap(msg => {
    //       // show a toast
    //       const toast = toastCtrl.create({
    //         message: msg.body,
    //         duration: 3000
    //       });
    //       toast.present();
    //     })
    //   ).subscribe()
    // })
    // this.initializeApp();
   
  }
  // private async presentToast(message) {
  //   const toast = await this.toastCtrl.create({
  //     message,
  //     duration: 3000
  //   });
  //   toast.present();
  // }
  // private notificationSetup() {
  //   this.fcm.getToken();
  //   this.fcm.onNotifications().subscribe(
  //     (msg) => {
  //       if (this.plt.is('ios')) {
  //         this.presentToast(msg.aps.alert);
  //       } else {
  //         this.presentToast(msg.body);
  //       }
  //     });
  // }
  // initializeApp() {
  //   this.plt.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //     this.notificationSetup();
  //   });
  // }
  

  ionViewDidLoad(){
  //  this.fcm.getToken()
  //  this.fcm.listenToNotifications().pipe(
  //    tap(msg => {
  //      const toast = this.toastCtrl.create({
  //        message: msg.body,
  //        duration: 3000
  //      })
  //      toast.present()
  //    })
  //  )
  //  .subscribe()
    
    
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


  ngOnInit() {

    // console.log(this.generateWord());
    // interval(1000).subscribe(() => {
    //   
    // });

    //permission for speechrecognition
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      })
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
    // this.plt.ready().then(() => {
    //   this.fcm.getToken();
    //   // Listen to incoming messages
    //   this.fcm.listenToNotifications().pipe(
    //     tap(msg => {

    //       let messageText: string;
    //       if (this.plt.is('android')) {
    //         messageText = msg.body;
    //       }

    //       if (this.plt.is('ios')) {
    //         messageText = msg.aps.alert;
    //       }

    //       // show a toast
    //       const toast = this.toastCtrl.create({
    //         message: messageText,
    //         duration: 3000,
    //         position: 'top'
    //       });
    //       toast.present();

    //     })
    //   )
    //     .subscribe();
    // })
    // this.hasOneDayPassed();
    // this.generateWord();

    // this.storage.get("tryy").then((tryy) => {
    //   console.log(tryy)
      
    // });
  }

  //speech recognition function
  startListening() {
    return new Promise<any>((resolve, reject) => {

      let options = {
        language: 'en-US'
      }
      this.speechRecognition.startListening().subscribe(matches => {
        console.log(matches)
        this.matches = matches;
        this.cd.detectChanges();
      });
      this.isRecording = true;

      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

  stopListening() { //for ios only
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    })
  }
  isIos() {
    return this.plt.is('ios');
  }
  presentConfirm() {

    var options = {
      title: 'Choose the word',
      message: 'What did you say?',
      inputs: [],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          // handler: data => {
          //   console.log(data);
          // }
          handler: (data: string) => {
            console.log(data);
            this.selectedItem = data + " ";

          }
        }
      ]
    };

    options.inputs = [];

    // adds radio button
    for (let i = 0; i < this.matches.length; i++) {
      options.inputs.push({ name: 'options', value: this.matches[i], label: this.matches[i], type: 'radio' });
    }

    let alert = this.alertCtrl.create(options);
    alert.present();

  }

  global() {
    this.startListening().then(res => this.presentConfirm());
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
  //   this.storage.get("tryy").then((tryy) => {
  //     console.log(tryy)
  //     if (tryy == this.random) {
  //       this.random = Math.floor((Math.random() * 20) + 1);
  //     }
  //     else {
  //       this.storage.set("tryy", this.random);
  //     }
  //   });
  // }


}
