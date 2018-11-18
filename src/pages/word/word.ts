import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';
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
  arr: string;
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

    console.log(this.navParams.data.words);
    this.arr = navParams.get('words');
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


  navigateToDetails(word) {

    this.navCtrl.push(WordPage, {
      'words': this.words

    });

  }

}
