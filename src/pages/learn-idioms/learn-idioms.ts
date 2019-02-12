
import { Component, OnInit, ViewChild } from '@angular/core';;
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { IdiomPage } from '../idiom/idiom';
import * as algoliasearch from 'algoliasearch';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LearnIdiomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 interface Note{
   idiomCopyr: string;
   idiomID: number;
   idiomName: string;
   meaning: Map<string, string>;
 }
@IonicPage()

@Component({
  selector: 'page-learn-idioms',
  templateUrl: 'learn-idioms.html',
})
export class LearnIdiomsPage implements OnInit{
  public selectedIdiom: any;
  notesCollection1: AngularFirestoreCollection<Note>;
  idioms1: Observable<any[]>;
  notesCollection2: AngularFirestoreCollection<Note>;
  idioms2: Observable<any[]>;
  notesCollection3: AngularFirestoreCollection<Note>;
  idioms3: Observable<any[]>;
  notesCollection4: AngularFirestoreCollection<Note>;
  idioms4: Observable<any[]>;
  notesCollection5: AngularFirestoreCollection<Note>;
  idioms5: Observable<any[]>;
  notesCollection6: AngularFirestoreCollection<Note>;
  idioms6: Observable<any[]>;
  notesCollection7: AngularFirestoreCollection<Note>;
  idioms7: Observable<any[]>;
  notesCollection8: AngularFirestoreCollection<Note>;
  idioms8: Observable<any[]>;
  notesCollection9: AngularFirestoreCollection<Note>;
  idioms9: Observable<any[]>;
  notesCollection10: AngularFirestoreCollection<Note>;
  idioms10: Observable<any[]>;
  notesCollection11: AngularFirestoreCollection<Note>;
  idioms11: Observable<any[]>;
  notesCollection12: AngularFirestoreCollection<Note>;
  idioms12: Observable<any[]>;
  notesCollection13: AngularFirestoreCollection<Note>;
  idioms13: Observable<any[]>;
  notesCollection14: AngularFirestoreCollection<Note>;
  idioms14: Observable<any[]>;
  notesCollection15: AngularFirestoreCollection<Note>;
  idioms15: Observable<any[]>;
  notesCollection16: AngularFirestoreCollection<Note>;
  idioms16: Observable<any[]>;
  notesCollection17: AngularFirestoreCollection<Note>;
  idioms17: Observable<any[]>;
  notesCollection18: AngularFirestoreCollection<Note>;
  idioms18: Observable<any[]>;
  notesCollection19: AngularFirestoreCollection<Note>;
  idioms19: Observable<any[]>;
  notesCollection20: AngularFirestoreCollection<Note>;
  idioms20: Observable<any[]>;
  notesCollection21: AngularFirestoreCollection<Note>;
  idioms21: Observable<any[]>;
  notesCollection22: AngularFirestoreCollection<Note>;
  idioms22: Observable<any[]>;
  notesCollection23: AngularFirestoreCollection<Note>;
  idioms23: Observable<any[]>;
  notesCollection24: AngularFirestoreCollection<Note>;
  idioms24: Observable<any[]>;
  notesCollection25: AngularFirestoreCollection<Note>;
  idioms25: Observable<any[]>;
  notesCollection26: AngularFirestoreCollection<Note>;
  idioms26: Observable<any[]>;
 
  constructor(private afs: AngularFirestore, public navCtrl: NavController){
    // this.idioms = db.collection('idioms').valueChanges();
    // this.idioms = db.collection('idioms', ref => {
    //   return ref.orderBy('idiomName')
    // }).valueChanges();
    // this.idioms = db.collection('idioms', ref => {
    //   return ref.where('idiomId', '==', '2000')
    // }).valueChanges();


  
    // switchMap(aaa => db.collection('idioms', ref => ref.where('idiomId', '==', '2000')).valueChanges(),
    
    // );
    
 }

 ngOnInit() {
   //a
   this.notesCollection1= this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1).where("idiomID", '<', 50)
   });
   this.idioms1 = this.notesCollection1.valueChanges();
   console.log(this.idioms1)
   //b
   this.notesCollection2 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 50).where("idiomID", '<', 100)
   });
   this.idioms2 = this.notesCollection2.valueChanges();
   //c
  //  this.notesCollection3 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 100).where("idiomID", '<', 150)
  //  });
  //  this.idioms3 = this.notesCollection3.valueChanges();
   //d
   this.notesCollection4 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 150).where("idiomID", '<', 200)
   });
   this.idioms4 = this.notesCollection4.valueChanges();
   //e
  //  this.notesCollection5 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 200).where("idiomID", '<', 250)
  //  });
  //  this.idioms5 = this.notesCollection5.valueChanges();
   //f
  //  this.notesCollection6 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 250).where("idiomID", '<', 300)
  //  });
  //  this.idioms6 = this.notesCollection6.valueChanges();
   //g
  //  this.notesCollection7 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 300).where("idiomID", '<', 350)
  //  });
  //  this.idioms7 = this.notesCollection7.valueChanges();
   //h
   this.notesCollection8 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 350).where("idiomID", '<', 400)
   });
   this.idioms8 = this.notesCollection8.valueChanges();
   //i
   this.notesCollection9 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 400).where("idiomID", '<', 450)
   });
   this.idioms9 = this.notesCollection9.valueChanges();
   //j
  //  this.notesCollection10 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 450).where("idiomID", '<', 500)
  //  });
  //  this.idioms10 = this.notesCollection10.valueChanges();
   //k
   this.notesCollection11 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 500).where("idiomID", '<', 550)
   });
   this.idioms11 = this.notesCollection11.valueChanges();
   //l
   this.notesCollection12 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 550).where("idiomID", '<', 600)
   });
   this.idioms12 = this.notesCollection12.valueChanges();
   //m
   this.notesCollection13 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 600).where("idiomID", '<', 650)
   });
   this.idioms13 = this.notesCollection13.valueChanges();
   //n
   this.notesCollection14 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 650).where("idiomID", '<', 700)
   });
   this.idioms14 = this.notesCollection14.valueChanges();
   //o
  //  this.notesCollection15 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 700).where("idiomID", '<', 750)
  //  });
  //  this.idioms15 = this.notesCollection15.valueChanges();
   //p
   this.notesCollection16 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 750).where("idiomID", '<', 800)
   });
   this.idioms16 = this.notesCollection16.valueChanges();
   //q
  //  this.notesCollection17 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 800).where("idiomID", '<', 850)
  //  });
  //  this.idioms17 = this.notesCollection17.valueChanges();
   //r
  //  this.notesCollection18 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 850).where("idiomID", '<', 900)
  //  });
  //  this.idioms18 = this.notesCollection18.valueChanges();
   //s
   this.notesCollection19 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 900).where("idiomID", '<', 950)
   });
   this.idioms19 = this.notesCollection19.valueChanges();
   //t
   this.notesCollection20 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 950).where("idiomID", '<', 1000)
   });
   this.idioms20 = this.notesCollection20.valueChanges();
   //u
   this.notesCollection21 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1000).where("idiomID", '<', 1050)
   });
   this.idioms21 = this.notesCollection21.valueChanges();
   //v
   this.notesCollection22 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1050).where("idiomID", '<', 1100)
   });
   this.idioms22 = this.notesCollection22.valueChanges();
   //w
   this.notesCollection23 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1100).where("idiomID", '<', 1150)
   });
   this.idioms23 = this.notesCollection23.valueChanges();
   //x
  //  this.notesCollection24 = this.afs.collection('idioms', ref => {
  //    return ref.where("idiomID", '>=', 1150).where("idiomID", '<', 1200)
  //  });
  //  this.idioms24 = this.notesCollection24.valueChanges();
   //y
   this.notesCollection25 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1200).where("idiomID", '<', 1250)
   });
   this.idioms25 = this.notesCollection25.valueChanges();
   //z
   this.notesCollection26 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 1250).where("idiomID", '<', 1300)
   });
   this.idioms26 = this.notesCollection26.valueChanges();
   
 }

  navigateToDetails(item){
    this.selectedIdiom = item;
    console.log(item);
    this.navCtrl.push(IdiomPage, {
      'idiomName': this.selectedIdiom.idiomName,
      'meanEng': this.selectedIdiom.meaning.meanEng,
      'meanFil': this.selectedIdiom.meaning.meanFil,
      'idiomCopyr': this.selectedIdiom.idiomCopyr,
      'idiomID': this.selectedIdiom.idiomID
    });

  }

  navigateToLearnPage(): void {
    this.navCtrl.push(LearnPage);
 }

  @ViewChild('pageTop') pageTop: Content;
  @ViewChild(Content) content: Content;
  @ViewChild('target_A') target_A: any;
  @ViewChild('target_B') target_B: any;
  @ViewChild('target_K') target_K: any;
  @ViewChild('target_D') target_D: any;
  @ViewChild('target_H') target_H: any;
  @ViewChild('target_I') target_I: any;
  @ViewChild('target_L') target_L: any;
  @ViewChild('target_M') target_M: any;
  @ViewChild('target_N') target_N: any;
  @ViewChild('target_P') target_P: any;
  @ViewChild('target_S') target_S: any;
  @ViewChild('target_T') target_T: any;
  @ViewChild('target_U') target_U: any;
  @ViewChild('target_W') target_W: any;
 

 /**
  * Method to scroll to top
  */
 public pageScroller(){
   //scroll to page top
   this.pageTop.scrollToTop();
 }

 public scrollElementA() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_A.nativeElement.offsetTop, 500);
  }

  public scrollElementB() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_B.nativeElement.offsetTop, 500);
  }

  public scrollElementK() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_K.nativeElement.offsetTop, 500);
  }

  public scrollElementD() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_D.nativeElement.offsetTop, 500);
  }

  public scrollElementH() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_H.nativeElement.offsetTop, 500);
  }

  public scrollElementI() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_I.nativeElement.offsetTop, 500);
  }

  public scrollElementL() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_L.nativeElement.offsetTop, 500);
  }

  public scrollElementM() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_M.nativeElement.offsetTop, 500);
  }

  public scrollElementN() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_N.nativeElement.offsetTop, 500);
  }

  public scrollElementP() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_P.nativeElement.offsetTop, 500);
  }

  public scrollElementS() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_S.nativeElement.offsetTop, 500);
  }

  public scrollElementT() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_T.nativeElement.offsetTop, 500);
  }

  public scrollElementU() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_U.nativeElement.offsetTop, 500);
  }

  public scrollElementW() {
    // Avoid reading the DOM directly, by using ViewChild and the target reference
    this.content.scrollTo(0, this.target_W.nativeElement.offsetTop, 500);
  }

}