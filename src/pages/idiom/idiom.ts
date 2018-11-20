import { LearnIdiomsPage } from './../learn-idioms/learn-idioms';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  idiomName: string;
  meanEng : string;
  meanFil: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('idiomName'));
    console.log(this.navParams.get('meanEng'));
    console.log(this.navParams.get('meanFil'));

    this.idiomName = navParams.get('idiomName');
    this.meanEng = navParams.get('meanEng');
    this.meanFil = navParams.get('meaFil');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad idiomPage');

  }
  navigateToLearnIdiomsPage(): void {
    this.navCtrl.push(LearnIdiomsPage);
  }

}
