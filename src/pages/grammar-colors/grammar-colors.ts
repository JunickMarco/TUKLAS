import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';


/**
 * Generated class for the GrammarColorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-colors',
  templateUrl: 'grammar-colors.html',
})
export class GrammarColorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarColorsPage');
  }

  
  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

 @ViewChild('pageTop') pageTop: Content;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

}
