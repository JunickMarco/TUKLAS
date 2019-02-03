import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizBaybayinPage } from '../quiz-baybayin/quiz-baybayin';
import { QuizGrammarPage } from '../quiz-grammar/quiz-grammar';
import { QuizIdiomsPage } from '../quiz-idioms/quiz-idioms';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
  navigateToQuizIdiomsPage(): void {
    this.navCtrl.push(QuizIdiomsPage);
  }

  navigateToQuizGrammarPage(): void {
    this.navCtrl.push(QuizGrammarPage);
  }

  navigateToQuizBaybayinPage(): void {
    this.navCtrl.push(QuizBaybayinPage);

  }
}