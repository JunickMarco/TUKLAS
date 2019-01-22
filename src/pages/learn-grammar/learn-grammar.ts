import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { GrammarLanguagePage } from '../grammar-language/grammar-language';
import { GrammarStructurePage } from '../grammar-structure/grammar-structure';
import { GrammarNumbersPage } from '../grammar-numbers/grammar-numbers';
import { GrammarMistakesPage } from '../grammar-mistakes/grammar-mistakes';

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

 navigateToGrammarNumbersPage(): void {
  this.navCtrl.push(GrammarNumbersPage);
}

 navigateToGrammarMistakesPage(): void {
  this.navCtrl.push(GrammarMistakesPage);
}
}
