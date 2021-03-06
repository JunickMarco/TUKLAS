import { QuizVocabularyPageModule } from './../pages/quiz-vocabulary/quiz-vocabulary.module';
import { QuizIdiomsPageModule } from './../pages/quiz-idioms/quiz-idioms.module';
import { QuizGrammarPageModule } from './../pages/quiz-grammar/quiz-grammar.module';
import { QuizBaybayinPageModule } from './../pages/quiz-baybayin/quiz-baybayin.module';
import { QuizPageModule } from './../pages/quiz/quiz.module';
import { LearnIdiomsPageModule } from './../pages/learn-idioms/learn-idioms.module';
import { LearnGrammarPageModule } from './../pages/learn-grammar/learn-grammar.module';
import { LearnBaybayinPageModule } from './../pages/learn-baybayin/learn-baybayin.module';
import { LearnPageModule } from './../pages/learn/learn.module';
import { IdiomPageModule } from './../pages/idiom/idiom.module';
import { HomePageModule } from './../pages/home/home.module';
import { GrammarTimePageModule } from './../pages/grammar-time/grammar-time.module';
import { GrammarStructurePageModule } from './../pages/grammar-structure/grammar-structure.module';
import { GrammarPleasePageModule } from './../pages/grammar-please/grammar-please.module';
import { GrammarNumbersPageModule } from './../pages/grammar-numbers/grammar-numbers.module';
import { GrammarMistakesPageModule } from './../pages/grammar-mistakes/grammar-mistakes.module';
import { GrammarLanguagePageModule } from './../pages/grammar-language/grammar-language.module';
import { GrammarDaysmonthsPageModule } from './../pages/grammar-daysmonths/grammar-daysmonths.module';
import { GrammarColorsPageModule } from './../pages/grammar-colors/grammar-colors.module';
import { BaybayinWritePageModule } from './../pages/baybayin-write/baybayin-write.module';
import { BaybayinSystemsPageModule } from './../pages/baybayin-systems/baybayin-systems.module';
import { BaybayinMaterialsPageModule } from './../pages/baybayin-materials/baybayin-materials.module';
import { BaybayinIntroPageModule } from './../pages/baybayin-intro/baybayin-intro.module';
import { BaybayinHistoryPageModule } from './../pages/baybayin-history/baybayin-history.module';
import { BaybayinChartPageModule } from './../pages/baybayin-chart/baybayin-chart.module';
import { BaybayinActionPageModule } from './../pages/baybayin-action/baybayin-action.module';
import { AboutAppPageModule } from './../pages/about-app/about-app.module';
import { AboutPageModule } from './../pages/about/about.module';
import { ComponentsModule } from './../components/components.module';


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
import { GrammarColorsPage } from '../pages/grammar-colors/grammar-colors';
import { GrammarDaysmonthsPage } from '../pages/grammar-daysmonths/grammar-daysmonths';
import { GrammarPleasePage } from '../pages/grammar-please/grammar-please';
import { GrammarTimePage } from '../pages/grammar-time/grammar-time';

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
import { QuizVocabularyPage } from './../pages/quiz-vocabulary/quiz-vocabulary';
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
import { WotdPageModule } from '../pages/wotd/wotd.module';
import { WordPageModule } from '../pages/word/word.module';
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
    // AboutPage,
    // HomePage,
    // LearnPage,
    // QuizPage,
    // WotdPage,
    // WordPage,
    TabsPage,
    // LearnIdiomsPage,
    // IdiomPage,
    // LearnGrammarPage,
    // LearnBaybayinPage,
    // GrammarLanguagePage,
    // GrammarStructurePage,
    // GrammarNumbersPage,
    // GrammarMistakesPage,
    // GrammarColorsPage,
    // GrammarDaysmonthsPage,
    // GrammarPleasePage,
    // GrammarTimePage,
    // BaybayinIntroPage,
    // BaybayinHistoryPage,
    // BaybayinWritePage,
    // BaybayinChartPage,
    // BaybayinMaterialsPage,
    // BaybayinSystemsPage,
    // BaybayinActionPage,
    // QuizBaybayinPage,
    // QuizGrammarPage,
    // QuizIdiomsPage,
    // QuizVocabularyPage,
    // AboutAppPage,
    // FlashCardComponent

  ],
  imports: [
    WordPageModule,
    WotdPageModule,
    QuizVocabularyPageModule,
    QuizIdiomsPageModule,
    QuizGrammarPageModule,
    QuizBaybayinPageModule,
    QuizPageModule,
    LearnIdiomsPageModule,
    LearnGrammarPageModule,
    LearnBaybayinPageModule,
    LearnPageModule,
    IdiomPageModule,
    HomePageModule,
    GrammarTimePageModule,
    GrammarStructurePageModule,
    GrammarPleasePageModule,
    GrammarNumbersPageModule,
    GrammarMistakesPageModule,
    GrammarLanguagePageModule,
    GrammarDaysmonthsPageModule,
    GrammarColorsPageModule,
    BaybayinWritePageModule,
    BaybayinSystemsPageModule,
    BaybayinMaterialsPageModule,
    BaybayinIntroPageModule,
    BaybayinHistoryPageModule,
    BaybayinChartPageModule,
    BaybayinActionPageModule,
    // ComponentsModule,
    AboutPageModule,
    AboutAppPageModule,
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
    GrammarColorsPage,
    GrammarDaysmonthsPage,
    GrammarPleasePage,
    GrammarTimePage,
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
    QuizVocabularyPage,
    AboutAppPage,
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
