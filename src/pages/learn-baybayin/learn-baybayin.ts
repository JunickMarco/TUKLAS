import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { BaybayinIntroPage } from '../baybayin-intro/baybayin-intro';
import { BaybayinHistoryPage } from '../baybayin-history/baybayin-history';
import { BaybayinWritePage } from '../baybayin-write/baybayin-write';
import { BaybayinChartPage } from '../baybayin-chart/baybayin-chart';
import { BaybayinMaterialsPage } from '../baybayin-materials/baybayin-materials';
import { BaybayinSystemsPage } from '../baybayin-systems/baybayin-systems';
import { BaybayinActionPage } from '../baybayin-action/baybayin-action';

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

 navigateToBaybayinHistoryPage(): void {
  this.navCtrl.push(BaybayinHistoryPage);
}

 navigateToBaybayinWritePage(): void {
  this.navCtrl.push(BaybayinWritePage);
}

 navigateToBaybayinChartPage(): void {
  this.navCtrl.push(BaybayinChartPage);
}

 navigateToBaybayinMaterialsPage(): void {
  this.navCtrl.push(BaybayinMaterialsPage);
}

 navigateToBaybayinSystemsPage(): void {
  this.navCtrl.push(BaybayinSystemsPage);
}

 navigateToBaybayinActionPage(): void {
  this.navCtrl.push(BaybayinActionPage);
}
}
