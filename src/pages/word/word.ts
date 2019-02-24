
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the WordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {
  public selectedWord: any;
  audioFile: string;
  wordName: string;
  bayEq: string;
  copyright: string;
  engDef: string;
  engEq: string;
  filDef: string;
  engParos: string;
  filParos: string;
  sentences: string;
  synonyms: string;
  copyrightDefFil: string;
  copyrightDefEng: string;
  copyrightSentSampl: string;


  client: any;
  index: any;
  ALGOLIA_APP_ID: string = "E4K2LLB4XB";
  ALGOLIA_APP_KEY: string = "0fdb807e39c747a9bd8ae696afb572e6";
  searchQuery: string = "";
  words = [];
  isRecording = false;
  ainput: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modal: ModalController, private alertCtrl: AlertController, private view: ViewController, private plt: Platform, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, ) {
    //algolia for search
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_APP_KEY, {
      protocol: 'https:'
    });

    this.index = this.client.initIndex("tuklas_WORDS")
    //for testing
    console.log(this.navParams.get('audioFile'));
    console.log(this.navParams.get('bayEq'));
    console.log(this.navParams.get('wordName'));
    console.log(this.navParams.get('copyrightDefFil'));
    console.log(this.navParams.get('engDef'));
    console.log(this.navParams.get('filDef'));
    console.log(this.navParams.get('engParos'));
    console.log(this.navParams.get('filParos'));
    console.log(this.navParams.get('sentences'));
    console.log(this.navParams.get('engEq'));
    console.log(this.navParams.get('synonyms'));
    console.log(this.navParams.get('copyrightDefEng'));
    console.log(this.navParams.get('copyrightSentSampl'));

    this.audioFile = navParams.get('audioFile');
    this.bayEq = navParams.get('bayEq');
    this.wordName = navParams.get('wordName');
    this.copyrightDefFil = navParams.get('copyrightDefFil');
    this.copyrightDefEng = navParams.get('copyrightDefEng');
    this.copyrightSentSampl = navParams.get('copyrightSentSampl');
    this.engDef = navParams.get('engDef');
    this.filDef = navParams.get('filDef');
    this.engParos = navParams.get('engParos');
    this.filParos = navParams.get('filParos');
    this.sentences = navParams.get('sentences');
    this.synonyms = navParams.get('synonyms');
    this.engEq = navParams.get('engEq');


  }

  //speechrecognition
  ngOnInit() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });

  }
  isIos() {
    return this.plt.is('ios');
  }
  isAndroid() {
    return this.plt.is('android');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Recording',
      subTitle: 'Try Saying Something',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.stopListening();
        }
      }],

    });
    alert.present();
  }
  startListening() {
    return new Promise<any>((resolve, reject) => {

      let options = {
        language: 'en-US'
      }
      this.searchQuery = " "
      this.speechRecognition.startListening(options).subscribe(matches => {
        this.ainput = matches[0];
        console.log(this.ainput);
        this.searchQuery = this.ainput
        this.cd.detectChanges();
      });
      this.isRecording = true;

    });
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  start() {
    let options = {
      language: 'fil-PH'
    }
    this.searchQuery = " "
    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: Array<string>) => {
          this.ainput = matches[0];
          console.log(this.ainput);
          this.searchQuery = this.ainput
        },
        (onerror) => console.log('error:', onerror)
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordPage');

  }

  search(event) {
    this.index.search({
      query: this.searchQuery
    }).then((data) => {
      console.log(data.hits);
      this.words = data.hits;

    })

  }

  navigateToHomePage() {
    // this.navCtrl.push(HomePage);
    this.navCtrl.pop()
    console.log("Go Back")
  }

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

  @ViewChild("audio") audio;
  playAudio() {
    this.audio.nativeElement.play();
  }

  // instModal() {
  //   const myModal = this.modal.create('ModalPage')
  //   myModal.present();
  // }



}
