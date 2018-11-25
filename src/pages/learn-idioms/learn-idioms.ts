
import { Component, OnInit } from '@angular/core';;
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { IdiomPage } from '../idiom/idiom';
import * as algoliasearch from 'algoliasearch';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
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
   //b
   this.notesCollection2 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 50).where("idiomID", '<', 100)
   });
   this.idioms2 = this.notesCollection2.valueChanges();
   //c
   this.notesCollection3 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 100).where("idiomID", '<', 150)
   });
   this.idioms3 = this.notesCollection3.valueChanges();
   //d
   this.notesCollection4 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 150).where("idiomID", '<', 200)
   });
   this.idioms4 = this.notesCollection4.valueChanges();
   //e
   this.notesCollection5 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 200).where("idiomID", '<', 250)
   });
   this.idioms5 = this.notesCollection5.valueChanges();
   //f
   this.notesCollection6 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 250).where("idiomID", '<', 300)
   });
   this.idioms6 = this.notesCollection6.valueChanges();
   //g
   this.notesCollection7 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 300).where("idiomID", '<', 350)
   });
   this.idioms7 = this.notesCollection7.valueChanges();
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
   this.notesCollection10 = this.afs.collection('idioms', ref => {
     return ref.where("idiomID", '>=', 450)
   });
   this.idioms10 = this.notesCollection10.valueChanges();
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


}