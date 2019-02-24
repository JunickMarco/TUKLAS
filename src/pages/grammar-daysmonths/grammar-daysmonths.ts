import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';


/**
 * Generated class for the GrammarDaysmonthsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-daysmonths',
  templateUrl: 'grammar-daysmonths.html',
})
export class GrammarDaysmonthsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarDaysmonthsPage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

 @ViewChild('pageTop') pageTop: Content;
 @ViewChild(Content) content: Content;
 @ViewChild('Days') Days: any;
 @ViewChild('Months') Months: any;

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementDays() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Days.nativeElement.offsetTop, 500);
}

public scrollElementMonths() {
  // Avoid reading the DOM directly, by using ViewChild and the target reference
  this.content.scrollTo(0, this.Months.nativeElement.offsetTop, 500);
}

}
