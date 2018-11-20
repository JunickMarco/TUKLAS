import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { IdiomPage } from '../idiom/idiom';

/**
 * Generated class for the LearnIdiomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn-idioms',
  templateUrl: 'learn-idioms.html',
})
export class LearnIdiomsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnIdiomsPage');
  }

  navigateToLearnPage(): void {
    this.navCtrl.push(LearnPage);
 }

 navigateToIdiomCardPage(): void {
  this.navCtrl.push(IdiomPage);
}

}
