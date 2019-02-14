import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';

/**
 * Generated class for the BaybayinWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baybayin-write',
  templateUrl: 'baybayin-write.html',
})
export class BaybayinWritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaybayinWritePage');
  }

  
  navigateToBaybayinPage(): void {
    this.navCtrl.push(LearnBaybayinPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Written') Written: any;
 @ViewChild('Writevowels') Writevowels: any;
 @ViewChild('Writeconsonant') Writeconsonant: any;
 @ViewChild('Nga') Nga: any;
 @ViewChild('Kudlit') Kudlit: any;
 @ViewChild('Spanishkud') Spanishkud: any;
 @ViewChild('Vertical') Vertical: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementWritten() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Written.nativeElement.offsetTop, 500);
}

public scrollElementWritevowels() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Writevowels.nativeElement.offsetTop, 500);
}

public scrollElementWriteconsonant() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Writeconsonant.nativeElement.offsetTop, 500);
}

public scrollElementNga() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Nga.nativeElement.offsetTop, 500);
}

public scrollElementKudlit() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Kudlit.nativeElement.offsetTop, 500);
}

public scrollElementSpanishkud() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Spanishkud.nativeElement.offsetTop, 500);
}

public scrollElementVertical() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Vertical.nativeElement.offsetTop, 500);
}
}
