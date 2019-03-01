import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { QuizPage } from '../quiz/quiz';
/**
 * Generated class for the QuizVocabularyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-vocabulary',
  templateUrl: 'quiz-vocabulary.html',
})
export class QuizVocabularyPage {

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;
  slideOptions: any;
  questions: any;
  loadData: any;
  data: any
  show: string;
  color: string;
  constructor(private plt: Platform, public navCtrl: NavController, public dataService: DataProvider, public http: HttpClient) {
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

    this.loadData = this.http.get('assets/data/questions-vocabulary.json').subscribe((data: any) => {
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

    if (answer.correct) {
      this.score++;
      this.show = "YOU ARE RIGHT!"
    }
    else {
      this.show = "WRONG!"
    }

    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
    }, 2000);
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

  restartQuiz(): void {
    // this.score = 0;
    this.navCtrl.setRoot(QuizVocabularyPage);
    // this.slides.lockSwipes(false);
    // this.slides.slideTo(1, 1000);
    // this.slides.lockSwipes(true);

  }
}