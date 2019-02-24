import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnGrammarPage } from '../learn-grammar/learn-grammar';

/**
 * Generated class for the GrammarPleasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grammar-please',
  templateUrl: 'grammar-please.html',
})
export class GrammarPleasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarPleasePage');
  }

  navigateToGrammarPage(): void {
    this.navCtrl.push(LearnGrammarPage);
 }

  @ViewChild('pageTop') pageTop: Content;
  @ViewChild(Content) content: Content;
  @ViewChild('Form') Form: any;
  @ViewChild('Sample') Sample: any;

  /**
   * Method to scroll to top
   */
  public pageScroller(){
    //scroll to page top
    this.pageTop.scrollToTop();
  }

  public scrollElementForm() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.Form.nativeElement.offsetTop, 500);
  }
  
  public scrollElementSample() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.Sample.nativeElement.offsetTop, 500);
  }

}
