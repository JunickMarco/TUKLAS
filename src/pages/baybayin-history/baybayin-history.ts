import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';


/**
 * Generated class for the BaybayinHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baybayin-history',
  templateUrl: 'baybayin-history.html',
})
export class BaybayinHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaybayinHistoryPage');
  }

  
  navigateToBaybayinPage(): void {
    this.navCtrl.push(LearnBaybayinPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Baybay') Baybay: any;
 @ViewChild('Kawi') Kawi: any;
 @ViewChild('Sumatran') Sumatran: any;
 @ViewChild('Sulawesi') Sulawesi: any;
 @ViewChild('Assamese') Assamese: any;
 @ViewChild('Cham') Cham: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementBaybay() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Baybay.nativeElement.offsetTop, 500);
}

public scrollElementKawi() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Kawi.nativeElement.offsetTop, 500);
}

public scrollElementSumatran() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Sumatran.nativeElement.offsetTop, 500);
}

public scrollElementSulawesi() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Sulawesi.nativeElement.offsetTop, 500);
}

public scrollElementAssamese() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Assamese.nativeElement.offsetTop, 500);
}

public scrollElementCham() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Cham.nativeElement.offsetTop, 500);
}
}
