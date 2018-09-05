import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogInPage } from '../pages/log-in/log-in';
import { GradesPage } from '../pages/grades/grades';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CouresesPage } from '../pages/coureses/coureses';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MoodleProvider } from '../providers/moodle/moodle';
import { HttpClientModule } from '@angular/common/http';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CourseGradePage } from '../pages/course-grade/course-grade';
import { ItemGradePage } from '../pages/item-grade/item-grade';
import { CourseSectionsPage } from '../pages/course-sections/course-sections';
import { SectionContentPage } from '../pages/section-content/section-content';
import { ForumPage } from '../pages/activites/forum/forum';
import { QuizPage } from '../pages/activites/quiz/quiz';
import { TimedQuizPage } from '../pages/activites/quiz/timed-quiz/timed-quiz';
import { QuestionPage } from '../pages/activites/quiz/question/question';
import { AttemptSummaryPage } from '../pages/activites/quiz/attempt-summary/attempt-summary';
import { AttemptReviewPage } from '../pages/activites/quiz/attempt-review/attempt-review';
import { ForumPostsPage } from '../pages/activites/forum/forum-posts/forum-posts';
import { CourseEnrolledUsersPage } from '../pages/coureses/course-enrolled-users/course-enrolled-users';
import { UserDetailsPage } from '../pages/user-profile/user-details/user-details';
import { UtilsProvider } from '../providers/utils/utils';
import { ChoicePage } from '../pages/activites/choice/choice';
import { UrlPage } from '../pages/resources/url/url';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FilePage } from '../pages/resources/file/file';
import { FileOpener } from '@ionic-native/file-opener'
import { BookPage } from '../pages/resources/book/book';
import { FeedbackPage } from '../pages/activites/feedback/feedback';
import { LabelPage } from '../pages/resources/label/label';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    GradesPage,
    NotificationsPage,
    CouresesPage,
    UserProfilePage,
    CourseGradePage,
    ItemGradePage,
    CourseSectionsPage,
    SectionContentPage,
    ForumPage,
    QuizPage,
    TimedQuizPage,
    QuestionPage,
    AttemptSummaryPage,
    AttemptReviewPage,
    ForumPostsPage,
    CourseEnrolledUsersPage,
    UserDetailsPage,
    ChoicePage,
    UrlPage,
    FilePage,
    BookPage,
    FeedbackPage,
    LabelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    GradesPage,
    NotificationsPage,
    CouresesPage,
    UserProfilePage,
    CourseGradePage,
    ItemGradePage,
    CourseSectionsPage,
    SectionContentPage,
    ForumPage,
    QuizPage,
    TimedQuizPage,
    QuestionPage,
    AttemptSummaryPage,
    AttemptReviewPage,
    ForumPostsPage,
    CourseEnrolledUsersPage,
    UserDetailsPage,
    ChoicePage,
    UrlPage,
    FilePage,
    BookPage,
    FeedbackPage,
    LabelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoodleProvider,
    UtilsProvider,
    InAppBrowser,
    FileOpener,
    FileTransfer,
    File
  ]
})
export class AppModule { }
