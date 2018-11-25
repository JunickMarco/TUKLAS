import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { IdiomPage } from '../idiom/idiom';
import * as algoliasearch from 'algoliasearch';
import { algoliaConfig } from './../../app/algolia';
import instantsearch from 'instantsearch.js/dist/instantsearch';
/**
 * Generated class for the LearnIdiomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn-idioms',
  templateUrl: 'learn-idioms.html',
})
export class LearnIdiomsPage {

  public selectedWord: any;
  client: any;
  index: any;
  ALGOLIA_APP_ID: string = "E4K2LLB4XB";
  ALGOLIA_APP_KEY: string = "0fdb807e39c747a9bd8ae696afb572e6";
  searchQuery: string = "";
  idioms = [];


  search: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const options = algoliaConfig.algolia;
    console.log('ionViewDidLoad SearchPage');
    console.log(options);
    console.log(instantsearch)
    this.search = instantsearch(options);
    console.log(this.search);
    // search box widget
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
      
      })
    );

    // initialize hits widget
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: '<strong>{{idiomName}}</strong>'
               

        },
        
        
      }),
      console.log(instantsearch.widgets.hits.data)
    );



    this.search.start();
  }

  navigateToDetails(word) {
    this.selectedWord = word;
    console.log(word);
  }

}