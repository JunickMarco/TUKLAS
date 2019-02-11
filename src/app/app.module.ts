
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { LearnPage } from '../pages/learn/learn';
import { QuizPage } from '../pages/quiz/quiz';
import { WotdPage } from '../pages/wotd/wotd';
import { WordPage } from '../pages/word/word';
import { TabsPage } from '../pages/tabs/tabs';
import { LearnIdiomsPage } from '../pages/learn-idioms/learn-idioms';
import { IdiomPage } from '../pages/idiom/idiom';
import { LearnGrammarPage } from '../pages/learn-grammar/learn-grammar';
import { LearnBaybayinPage } from '../pages/learn-baybayin/learn-baybayin';

import { GrammarLanguagePage } from '../pages/grammar-language/grammar-language';
import { GrammarStructurePage } from '../pages/grammar-structure/grammar-structure';
import { GrammarNumbersPage } from '../pages/grammar-numbers/grammar-numbers';
import { GrammarMistakesPage } from '../pages/grammar-mistakes/grammar-mistakes';

import { BaybayinIntroPage } from '../pages/baybayin-intro/baybayin-intro';
import { BaybayinHistoryPage } from '../pages/baybayin-history/baybayin-history';
import { BaybayinWritePage } from '../pages/baybayin-write/baybayin-write';
import { BaybayinChartPage } from '../pages/baybayin-chart/baybayin-chart';
import { BaybayinMaterialsPage } from '../pages/baybayin-materials/baybayin-materials';
import { BaybayinSystemsPage } from '../pages/baybayin-systems/baybayin-systems';
import { BaybayinActionPage } from '../pages/baybayin-action/baybayin-action';

import { QuizBaybayinPage } from '../pages/quiz-baybayin/quiz-baybayin';
import { QuizGrammarPage } from '../pages/quiz-grammar/quiz-grammar';
import { QuizIdiomsPage } from '../pages/quiz-idioms/quiz-idioms';

import { AboutAppPage } from '../pages/about-app/about-app';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

// import { firebaseConfig } from './credentials';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../providers/data/data';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase/ngx';
const config = {
  apiKey: "AIzaSyB__ZukLK_JVXiVYNzoHPwArqjRQHTjah8",
  authDomain: "thesis-6214c.firebaseapp.com",
  databaseURL: "https://thesis-6214c.firebaseio.com",
  projectId: "thesis-6214c",
  storageBucket: "thesis-6214c.appspot.com",
  messagingSenderId: "649781282"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    LearnPage,
    QuizPage,
    WotdPage,
    WordPage,
    TabsPage,
    LearnIdiomsPage,
    IdiomPage,
    LearnGrammarPage,
    LearnBaybayinPage,
    GrammarLanguagePage,
    GrammarStructurePage,
    GrammarNumbersPage,
    GrammarMistakesPage,
    BaybayinIntroPage,
    BaybayinHistoryPage,
    BaybayinWritePage,
    BaybayinChartPage,
    BaybayinMaterialsPage,
    BaybayinSystemsPage,
    BaybayinActionPage,
    QuizBaybayinPage,
    QuizGrammarPage,
    QuizIdiomsPage,
    AboutAppPage,
    FlashCardComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), //for local storage
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    HttpClientModule,
    HttpModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    LearnPage,
    QuizPage,
    WotdPage,
    WordPage,
    TabsPage,
    LearnIdiomsPage,
    IdiomPage,
    LearnGrammarPage,
    LearnBaybayinPage,
    GrammarLanguagePage,
    GrammarStructurePage,
    GrammarNumbersPage,
    GrammarMistakesPage,
    BaybayinIntroPage,
    BaybayinHistoryPage,
    BaybayinWritePage,
    BaybayinChartPage,
    BaybayinMaterialsPage,
    BaybayinSystemsPage,
    BaybayinActionPage,
    QuizBaybayinPage,
    QuizGrammarPage,
    QuizIdiomsPage,
    AboutAppPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Firebase,
    FcmProvider,
    
  ]
  
})
export class AppModule {}
