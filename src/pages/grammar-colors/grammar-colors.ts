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
 @ViewChild(Content) content: Content;
 @ViewChild('Basic') Basic: any;
 @ViewChild('Dark') Dark: any;
 @ViewChild('Light') Light: any;
 @ViewChild('OtherC') OtherC: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementBasic() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Basic.nativeElement.offsetTop, 500);
}

public scrollElementDark() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Dark.nativeElement.offsetTop, 500);
}

public scrollElementLight() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Light.nativeElement.offsetTop, 500);
}

public scrollElementOtherC() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.OtherC.nativeElement.offsetTop, 500);
}

}
