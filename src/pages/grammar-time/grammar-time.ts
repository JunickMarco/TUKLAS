import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';


/**
 * Generated class for the GrammarTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-time',
  templateUrl: 'grammar-time.html',
})
export class GrammarTimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarTimePage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

  @ViewChild('pageTop') pageTop: Content;
  @ViewChild(Content) content: Content;
  @ViewChild('Timetable') Timetable: any;
  @ViewChild('Short') Short: any;

  /**
   * Method to scroll to top
   */
  public pageScroller(){
    //scroll to page top
    this.pageTop.scrollToTop();
  }

  public scrollElementTimetable() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.Timetable.nativeElement.offsetTop, 500);
  }

  public scrollElementShort() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.Short.nativeElement.offsetTop, 500);
  }

}
