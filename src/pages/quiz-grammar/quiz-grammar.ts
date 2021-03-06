import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { QuizPage } from '../quiz/quiz';
/**
 * Generated class for the QuizGrammarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-grammar',
  templateUrl: 'quiz-grammar.html',
})
export class QuizGrammarPage {

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;
  slideOptions: any;
  questions: any;
  loadData: any;
  data: any
  showFil: string;
  showEng: string;
  correct: boolean = false;
  wrong: boolean = false;
  constructor(public navCtrl: NavController, public dataService: DataProvider, public http: HttpClient, private plt: Platform) {
    let backAction = plt.registerBackButtonAction(() => {
      console.log("second");
      this.navCtrl.setRoot(QuizPage);
      backAction();
    }, 2)
  }

  ionViewWillLeave() {
    this.loadData.unsubscribe();

  }

  ionViewWillEnter() {

    this.slides.lockSwipes(true);

    this.loadData = this.http.get('assets/data/questions-grammar.json').subscribe((data: any) => {
      this.data = data.questions;
      this.data.map((question) => {
        let originalOrder = question.answers;
        question.answers = this.randomize(originalOrder);
        return question;

      })
      this.questions = this.randomize(this.data);
    });
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question) {

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    this.correct = false;
    this.wrong = false;
    if (answer.correct) {
      this.score++;
      this.showFil = "Tama ka!"
      this.showEng = "You are right!"
      this.correct = true;
    }
    else {
      this.showFil = "Mali!"
      this.showEng = "Wrong!"
      this.wrong = true;
    }

    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
    }, 1700);
  }

  randomize(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
    }

    return rawAnswers;

  }


  restartQuiz() {
    // this.score = 0;
    // this.ionViewWillEnter();
    // this.navCtrl.pop();
    this.navCtrl.setRoot(QuizGrammarPage);
    // this.navCtrl.popToRoot()
    // this.navCtrl.push(QuizGrammarPage);
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }

}