import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnIdiomsPage } from '../learn-idioms/learn-idioms';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';
import { LearnBaybayinPage } from '../learn-baybayin/learn-baybayin';

/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  navigateToIdiomsPage(): void {
    this.navCtrl.push(LearnIdiomsPage);
 }

 navigateToGrammarPage(): void {
  this.navCtrl.push(LearnGrammarPage);
}

navigateToBaybayinPage(): void {
  this.navCtrl.push(LearnBaybayinPage);
}

}
