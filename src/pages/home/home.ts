import { WordPage } from './../word/word';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as algoliasearch from 'algoliasearch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  client: any;
  index: any;
  ALGOLIA_APP_ID: string = "E4K2LLB4XB";
  ALGOLIA_APP_KEY: string = "0fdb807e39c747a9bd8ae696afb572e6";
  searchQuery: string = "";
  words = [];
  constructor(public navCtrl: NavController) {
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
    
    this.navCtrl.push(WordPage,{
      'words': this.words
     
    });
    
  }

}
