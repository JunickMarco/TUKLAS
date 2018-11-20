import { WordPage } from './../word/word';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//speech
  matches: String[];
  isRecording = false;
  
  public selectedItem: any;
  public selectedWord: any;
  client: any;
  index: any;
  ALGOLIA_APP_ID: string = "E4K2LLB4XB";
  ALGOLIA_APP_KEY: string = "0fdb807e39c747a9bd8ae696afb572e6";
  searchQuery: string = "";
  words = [];
  constructor(public navCtrl: NavController, private plt: Platform, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_APP_KEY, {
      protocol: 'https:'
    });

    this.index = this.client.initIndex("tuklas_WORDS")

  }
  search(event) {
    this.index.search({
      query: this.searchQuery
    }).then((data) => {
      console.log(data.hits);
      this.words = data.hits;
      
    })
    
  }

 
  navigateToDetails(word) {
    this.selectedWord = word;
    console.log(word);
    this.navCtrl.push(WordPage,{
      'wordName': this.selectedWord.wordName,
      'audioFile': this.selectedWord.audio,
      'bayEq': this.selectedWord.bayEq,
      'copyrightDefFil': this.selectedWord.copyright.defFil,
      'engDef': this.selectedWord.engDef,
      'engEq': this.selectedWord.engEq,
      'filDef': this.selectedWord.filDef,
      'parosEng': this.selectedWord.parosEng,
      'parosFil': this.selectedWord.parosFil,
      'sentence': this.selectedWord.sentence
     
    });
    
  }

  startListening() {
    let options = {
      language: 'en-US'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      console.log(matches)
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  // stopListening() { //for ios onleh
  //   this.speechRecognition.stopListening().then(() => {
  //     this.isRecording = false;
  //   })
  // }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      })
  }

  isIos() {
    return this.plt.is('ios');
  }

  getItem(item) {
    // store item in variable
    this.selectedItem = item;
    console.log(item);

  }

}
