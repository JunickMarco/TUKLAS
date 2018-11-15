import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LearnPage } from '../learn/learn';
import { QuizPage } from '../quiz/quiz';
import { WotdPage } from '../wotd/wotd';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WotdPage;
  tab3Root = LearnPage;
  tab4Root = QuizPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
