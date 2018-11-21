import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { BaybayinIntroPage } from '../baybayin-intro/baybayin-intro';

/**
 * Generated class for the LearnBaybayinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn-baybayin',
  templateUrl: 'learn-baybayin.html',
})
export class LearnBaybayinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnBaybayinPage');
  }

  navigateToLearnPage(): void {
    this.navCtrl.push(LearnPage);
 }

 navigateToBaybayinIntroPage(): void {
  this.navCtrl.push(BaybayinIntroPage);
}

}
