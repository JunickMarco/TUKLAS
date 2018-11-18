import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {
  arr: string;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data.words);
    this.arr = navParams.get('example1');
    this.data = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordPage');
    
  }

}
