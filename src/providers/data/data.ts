import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  loadBaybayin() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/questions-baybayin.json').subscribe((data: any) => {
        this.data = data.questions;
        resolve(this.data);
      });
    });

  }

  loadIdioms() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/questions-idioms.json').subscribe((data: any) => {
        this.data = data.questions;
        resolve(this.data);
      });
    });

  }
  loadGrammar() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/questions-grammar.json').subscribe((data: any) => {
        this.data = data.questions;
        resolve(this.data);
      });
    });
    
  }
  loadVocab() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/questions-vocabulary.json').subscribe((data: any) => {
        this.data = data.questions;
        resolve(this.data);
      });
    });

  }
}
