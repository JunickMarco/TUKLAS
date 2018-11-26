import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';

/**
 * Generated class for the GrammarLanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-language',
  templateUrl: 'grammar-language.html',
})
export class GrammarLanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarLanguagePage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

}
