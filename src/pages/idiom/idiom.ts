import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnIdiomsPage } from '../learn-idioms/learn-idioms';

/**
 * Generated class for the IdiomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idiom',
  templateUrl: 'idiom.html',
})
export class IdiomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdiomPage');
  }

  navigateToIdiomsPage(): void {
    this.navCtrl.push(LearnIdiomsPage);
 }

}
