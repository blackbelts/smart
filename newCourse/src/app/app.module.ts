import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AddCoursePage } from '../pages/add-course/add-course';
import { CoureseDetailsPage } from '../pages/courese-details/courese-details';
import { UserlistPage } from '../pages/userlist/userlist';
import { AtendancePage } from '../pages/atendance/atendance';
import { LeavingPage } from '../pages/leaving/leaving';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { UtilsProvider } from '../providers/utils/utils';
import { CourseProvider } from '../providers/course/course';
import { UserProvider } from '../providers/user/user';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const firebaseConfig = {
  apiKey: "AIzaSyCrUrLt1abOBxzhv31rV3hEynjTkWzHdyA",
  authDomain: "course-center-d0ca3.firebaseapp.com",
  databaseURL: "https://course-center-d0ca3.firebaseio.com",
  projectId: "course-center-d0ca3",
  storageBucket: "course-center-d0ca3.appspot.com",
  messagingSenderId: "411719727089"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    LoginPage,
    AddCoursePage,
    CoureseDetailsPage,
    UserlistPage,
    AtendancePage,
    LeavingPage

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupPage,
    LoginPage,
    AddCoursePage,
    CoureseDetailsPage,
    UserlistPage,
    AtendancePage,
    LeavingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    UtilsProvider,
    CourseProvider,
    UserProvider,

  ]
})
export class AppModule {}
