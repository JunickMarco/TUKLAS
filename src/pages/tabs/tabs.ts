import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { LearnPage } from '../learn/learn';
import { QuizPage } from '../quiz/quiz';
import { WotdPage } from '../wotd/wotd';

import { Tabs } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = WotdPage;
  tab3Root = LearnPage;
  tab4Root = QuizPage;
  tab5Root = AboutPage;

  constructor() {
    
  } 

  onTabsChange() {
    // Get the previous tab if any
    const previousTab = this.tabRef.previousTab(false);

    if (previousTab) {
      try {
        // Get the navCtrl and pop to the root page
        previousTab.getViews()[0].getNav().popToRoot();
      } catch (exception) {
        // Oops...
        console.error(exception);
      }
    }
  }
}
