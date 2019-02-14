import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';

/**
 * Generated class for the BaybayinChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baybayin-chart',
  templateUrl: 'baybayin-chart.html',
})
export class BaybayinChartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaybayinChartPage');
  }

  navigateToBaybayinPage(): void {
    this.navCtrl.push(LearnBaybayinPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Vowels') Vowels: any;
 @ViewChild('BSound') BSound: any;
 @ViewChild('KSound') KSound: any;
 @ViewChild('DRSound') DRSound: any;
 @ViewChild('GSound') GSound: any;
 @ViewChild('HSound') HSound: any;
 @ViewChild('LSound') LSound: any;
 @ViewChild('MSound') MSound: any;
 @ViewChild('NSound') NSound: any;
 @ViewChild('NGSound') NGSound: any;
 @ViewChild('PSound') PSound: any;
 @ViewChild('SSound') SSound: any;
 @ViewChild('TSound') TSound: any;
 @ViewChild('WSound') WSound: any;
 @ViewChild('YSound') YSound: any;
 @ViewChild('Punctuation') Punctuation: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementVowels() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Vowels.nativeElement.offsetTop, 500);
}

public scrollElementBSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.BSound.nativeElement.offsetTop, 500);
}

public scrollElementKSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.KSound.nativeElement.offsetTop, 500);
}

public scrollElementDRSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.DRSound.nativeElement.offsetTop, 500);
}

public scrollElementGSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.GSound.nativeElement.offsetTop, 500);
}

public scrollElementHSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.HSound.nativeElement.offsetTop, 500);
}

public scrollElementLSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.LSound.nativeElement.offsetTop, 500);
}

public scrollElementMSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.MSound.nativeElement.offsetTop, 500);
}

public scrollElementNSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.NSound.nativeElement.offsetTop, 500);
}

public scrollElementNGSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.NGSound.nativeElement.offsetTop, 500);
}

public scrollElementPSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.PSound.nativeElement.offsetTop, 500);
}

public scrollElementSSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.SSound.nativeElement.offsetTop, 500);
}

public scrollElementTSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.TSound.nativeElement.offsetTop, 500);
}

public scrollElementWSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.WSound.nativeElement.offsetTop, 500);
}

public scrollElementYSound() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.YSound.nativeElement.offsetTop, 500);
}

public scrollElementPunctuation() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Punctuation.nativeElement.offsetTop, 500);
}

}
