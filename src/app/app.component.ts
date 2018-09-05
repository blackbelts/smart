import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { GradesPage } from '../pages/grades/grades';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MoodleProvider } from '../providers/moodle/moodle';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ForumPage } from '../pages/activites/forum/forum';
import { UrlPage } from '../pages/resources/url/url';
import { FeedbackPage } from '../pages/activites/feedback/feedback';
import { LabelPage } from '../pages/resources/label/label';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage: any = LabelPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public moodleProvider: MoodleProvider,
    public menu: MenuController,

  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Question Bank', component: HomePage, icon: 'eye' },
      { title: 'Grades', component: GradesPage, icon: 'stats' },
      { title: 'Notifications', component: NotificationsPage, icon: 'notifications' },
    ];
  }
  public username: string
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout() {
    this.moodleProvider.logout();
    this.test = "Welcome"
    this.nav.setRoot(LogInPage)
  }
  goToProfile() {
    this.nav.push(UserProfilePage)
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  public test = "Welcome"
  menuOpened() {
    this.username = this.moodleProvider.getUserName()
    this.test = ""
  }

}
