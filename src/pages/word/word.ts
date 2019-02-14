
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';
import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  navigateToHomePage(): void {
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



}
