import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';

/**
 * Generated class for the GrammarLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-language',
  templateUrl: 'grammar-language.html',
})
export class GrammarLanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarLanguagePage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Cnt') Cnt: any;
 @ViewChild('Filvstag') Filvstag: any;
 @ViewChild('Earlyhist') Earlyhist: any;
 @ViewChild('Earlydev') Earlydev: any;
 @ViewChild('Spanishinf') Spanishinf: any;
 @ViewChild('Philafter') Philafter: any;
 @ViewChild('Filoff') Filoff: any;
 @ViewChild('Filtoday') Filtoday: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementCnt() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Cnt.nativeElement.offsetTop, 500);
}

public scrollElementFilvstag() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Filvstag.nativeElement.offsetTop, 500);
}

public scrollElementEarlyhist() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Earlyhist.nativeElement.offsetTop, 500);
}

public scrollElementEarlydev() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Earlydev.nativeElement.offsetTop, 500);
}

public scrollElementSpanishinf() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Spanishinf.nativeElement.offsetTop, 500);
}

public scrollElementPhilafter() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Philafter.nativeElement.offsetTop, 500);
}

public scrollElementFiloff() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Filoff.nativeElement.offsetTop, 500);
}

public scrollElementFiltoday() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Filtoday.nativeElement.offsetTop, 500);
}

}


