import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';

/**
 * Generated class for the BaybayinSystemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baybayin-systems',
  templateUrl: 'baybayin-systems.html',
})
export class BaybayinSystemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaybayinSystemsPage');
  }

   navigateToBaybayinPage(): void {
    this.navCtrl.push(LearnBaybayinPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Surat') Surat: any;
 @ViewChild('Tagbanua') Tagbanua: any;
 @ViewChild('Kulitan') Kulitan: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementSurat() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Surat.nativeElement.offsetTop, 500);
}

public scrollElementTagbanua() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Tagbanua.nativeElement.offsetTop, 500);
}

public scrollElementKulitan() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Kulitan.nativeElement.offsetTop, 500);
}

}
