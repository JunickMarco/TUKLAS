import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';

/**
 * Generated class for the BaybayinActionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baybayin-action',
  templateUrl: 'baybayin-action.html',
})
export class BaybayinActionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaybayinActionPage');
  }

  navigateToBaybayinPage(): void {
    this.navCtrl.push(LearnBaybayinPage);
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
