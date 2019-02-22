import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { GrammarLanguagePage } from '../grammar-language/grammar-language';
import { GrammarStructurePage } from '../grammar-structure/grammar-structure';
import { GrammarNumbersPage } from '../grammar-numbers/grammar-numbers';
import { GrammarMistakesPage } from '../grammar-mistakes/grammar-mistakes';
import { GrammarColorsPage } from '../grammar-colors/grammar-colors';
import { GrammarDaysmonthsPage } from '../grammar-daysmonths/grammar-daysmonths';
import { GrammarPleasePage } from '../grammar-please/grammar-please';
import { GrammarTimePage } from '../grammar-time/grammar-time';

/**
 * Generated class for the LearnGrammarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn-grammar',
  templateUrl: 'learn-grammar.html',
})
export class LearnGrammarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnGrammarPage');
  }

  navigateToLearnPage(): void {
    this.navCtrl.push(LearnPage);
 }

 navigateToGrammarLanguagePage(): void {
  this.navCtrl.push(GrammarLanguagePage);
}

 navigateToGrammarStructurePage(): void {
  this.navCtrl.push(GrammarStructurePage);
}

navigateToGrammarMistakesPage(): void {
  this.navCtrl.push(GrammarMistakesPage);
}

 navigateToGrammarNumbersPage(): void {
  this.navCtrl.push(GrammarNumbersPage);
}

 navigateToGrammarColorsPage(): void {
  this.navCtrl.push(GrammarColorsPage);
}

navigateToGrammarDaysmonthsPage(): void {
  this.navCtrl.push(GrammarDaysmonthsPage);
}

navigateToGrammarPleasePage(): void {
  this.navCtrl.push(GrammarPleasePage);
}

navigateToGrammarTimePage(): void {
  this.navCtrl.push(GrammarTimePage);
}

}
