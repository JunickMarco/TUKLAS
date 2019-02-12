import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the QuizBaybayinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-quiz-baybayin',
  templateUrl: 'quiz-baybayin.html',
})
export class QuizBaybayinPage {
  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questions: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {

  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);

    this.dataService.loadBaybayin().then((data) => {

      data.map((question) => {

        let originalOrder = question.answers;
        question.answers = this.randomize(originalOrder);
        return question;

      });

      this.questions = this.randomize(data);
      // this.questions = data.filter(item => item.n == this.random)
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
    }

    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
    }, 1000);
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
    this.score = 0;
    this.navCtrl.push(QuizBaybayinPage);
    // this.slides.lockSwipes(false);
    // this.slides.slideTo(1, 1000);
    // this.slides.lockSwipes(true);

  }
}