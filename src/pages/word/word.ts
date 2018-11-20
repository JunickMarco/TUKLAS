
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
  parosEng: string;
  parosFil: string;
  sentence: string;

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
    console.log(this.navParams.get('copyright'));
    console.log(this.navParams.get('engDef'));
    console.log(this.navParams.get('filDef'));
    console.log(this.navParams.get('parosEng'));
    console.log(this.navParams.get('parosFil'));
    console.log(this.navParams.get('sentence'));
    console.log(this.navParams.get('engEq'));
    
    this.audioFile = navParams.get('audioFile');
    this.bayEq = navParams.get('bayEq');
    this.wordName = navParams.get('wordName');
    this.copyright = navParams.get('copyright');
    this.engDef = navParams.get('engDef');
    this.filDef = navParams.get('filDef');
    this.parosEng = navParams.get('parosEng');
    this.parosFil = navParams.get('parosFil');
    this.sentence = navParams.get('sentence');
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
    this.navCtrl.push(HomePage);
 }

  navigateToDetails(word) {
    this.selectedWord = word;
    console.log(word);
    this.navCtrl.push(WordPage, {
      'wordName': this.selectedWord.wordName,
      'audioFile': this.selectedWord.audio,
      'bayEq': this.selectedWord.bayEq,
      'copyright': this.selectedWord.copyright,
      'engDef': this.selectedWord.engDef,
      'engEq': this.selectedWord.engEq,
      'filDef': this.selectedWord.filDef,
      'parosEng': this.selectedWord.parosEng,
      'parosFil': this.selectedWord.parosFil,
      'sentence': this.selectedWord.sentence

    });

  }

  @ViewChild("audio") audio;
  playAudio(){
    this.audio.nativeElement.play();
  }


  
}
