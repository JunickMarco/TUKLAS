import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { IdiomPage } from '../idiom/idiom';
import * as algoliasearch from 'algoliasearch';
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
 
  constructor(public navCtrl: NavController) {
    this.client = algoliasearch(this.ALGOLIA_APP_ID, this.ALGOLIA_APP_KEY, {
      protocol: 'https:'
    });

    this.index = this.client.initIndex("tuklas_IDIOMS")
    console.log(this.index);

    this.index.listIndexes(function (err, content) {
      if (err) throw err;

      console.log(content);
      this.arr = content;
    });
  } 
  
//   retrieve(){

//     this.hits.forEach(this.index.browse(''){
     
//     }); 

//     this.hits.forEach(this.index, function (value, key) {
//       console.log(value);
//     }); 

//     num.forEach(this.index.browse('') as $hit) {
//       $hits[] = $hit;
//     }
//   }

//   var num = [7, 8, 9];
// num.forEach(function (value) {
//   console.log(value);
// });

// listIndexes(){
//   this.index.listIndexes((data)=>{
//     console.log(data)
//     this.arr = data;
//   })
// }

  // listIndexes() {
  //   this.index.listIndexes((data) =>{
  //     console.log(data)
  //   this.arr = data;
  //   })
  // }

  listIndexes(){
    this.index.listIndexes(function (err, content) {
      if (err) throw err;

      console.log(content);
      this.arr = content;
    });
  }

 



  search(event) {
    this.index.search({
      query: this.searchQuery
    }).then((data) => {
      console.log(data.hits);
      this.idioms = data.hits;
      console.log(this.idioms);
    })

  }

  navigateIdiomCardPage(idiom) {
    this.selectedWord = idiom;
    console.log(idiom);
    this.navCtrl.push(IdiomPage, {
      'idiomName': this.selectedWord.idiomName,
      'meanEng': this.selectedWord.meaning.meanEng,
      'meanFil': this.selectedWord.meaning.meanFil, 
      'idiomCopyr': this.selectedWord.idiomCopyr

    });

}

  navigateToLearnPage(): void {
    this.navCtrl.push(LearnPage);
  }
}