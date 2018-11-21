
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
import { BaybayinIntroPage } from '../pages/baybayin-intro/baybayin-intro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

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
    BaybayinIntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    BaybayinIntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
