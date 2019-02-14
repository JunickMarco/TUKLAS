import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';

/**
 * Generated class for the GrammarMistakesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-mistakes',
  templateUrl: 'grammar-mistakes.html',
})
export class GrammarMistakesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarMistakesPage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Ngvsnang') Ngvsnang: any;
 @ViewChild('Dinvsrin') Dinvsrin: any;
 @ViewChild('Kungvskapag') Kungvskapag: any;
 @ViewChild('Telling') Telling: any;
 @ViewChild('Bukodvsliban') Bukodvsliban: any;
 @ViewChild('Pangpanpam') Pangpanpam: any;
 @ViewChild('Silasina') Silasina: any;


 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementNgvsnang() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Ngvsnang.nativeElement.offsetTop, 500);
}

public scrollElementDinvsrin() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Dinvsrin.nativeElement.offsetTop, 500);
}

public scrollElementKungvskapag() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Kungvskapag.nativeElement.offsetTop, 500);
}

public scrollElementTelling() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Telling.nativeElement.offsetTop, 500);
}

public scrollElementBukodvsliban() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Bukodvsliban.nativeElement.offsetTop, 500);
}

public scrollElementPangpanpam() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Pangpanpam.nativeElement.offsetTop, 500);
}

public scrollElementSilasina() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Silasina.nativeElement.offsetTop, 500);
}

}
