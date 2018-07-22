import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { GradesPage } from '../pages/grades/grades';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MessagesPage } from '../pages/messages/messages';
import { MyFilesPage } from '../pages/my-files/my-files';
import { CalenderEventsPage } from '../pages/calender-events/calender-events';
import { SiteHomePage } from '../pages/site-home/site-home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage: any = LogInPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Course overview', component: HomePage, icon: 'eye' },
      { title: 'Site home', component: SiteHomePage, icon: 'home' },
      { title: 'Grades', component: GradesPage, icon: 'stats' },
      { title: 'Notifications', component: NotificationsPage, icon: 'notifications' },
      { title: 'Messages', component: MessagesPage, icon: 'mail' },
      { title: 'Calendar events', component: CalenderEventsPage, icon: 'calendar' },
      { title: 'My files', component: MyFilesPage, icon: 'folder' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
