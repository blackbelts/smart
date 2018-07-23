import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pro } from '@ionic/pro'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogInPage } from '../pages/log-in/log-in';
import { CalenderEventsPage } from '../pages/calender-events/calender-events';
import { GradesPage } from '../pages/grades/grades';
import { MessagesPage } from '../pages/messages/messages';
import { MyFilesPage } from '../pages/my-files/my-files';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SiteHomePage } from '../pages/site-home/site-home';
import { TimelinePage } from '../pages/timeline/timeline';
import { CouresesPage } from '../pages/coureses/coureses';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MoodleProvider } from '../providers/moodle/moodle';
import { HttpClientModule } from '@angular/common/http';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CourseGradePage } from '../pages/course-grade/course-grade';
import { ItemGradePage } from '../pages/item-grade/item-grade';
import { CourseSectionsPage } from '../pages/course-sections/course-sections';
import { ContactListPage } from '../pages/contact-list/contact-list';
import { MessageListPage } from '../pages/message-list/message-list';
import { SectionContentPage } from '../pages/section-content/section-content';
import { AssignmentPage } from '../pages/activites/assignment/assignment';
import { ChatPage } from '../pages/activites/chat/chat/chat';
import { ChoicePage } from '../pages/activites/choice/choice';
import { DatabasePage } from '../pages/activites/database/database';
import { ExternalToolsPage } from '../pages/activites/external-tools/external-tools';
import { FeedbackPage } from '../pages/activites/feedback/feedback';
import { ForumPage } from '../pages/activites/forum/forum';
import { GlossaryPage } from '../pages/activites/glossary/glossary';
import { LessonPage } from '../pages/activites/lesson/lesson';
import { QuizPage } from '../pages/activites/quiz/quiz';
import { ScormPage } from '../pages/activites/scorm/scorm';
import { SurveyPage } from '../pages/activites/survey/survey';
import { WikiPage } from '../pages/activites/wiki/wiki';
import { WorkshopPage } from '../pages/activites/workshop/workshop';
import { BookPage } from '../pages/Resources/book/book';
import { FolderPage } from '../pages/Resources/folder/folder';
import { ImsContentPage } from '../pages/Resources/ims-content/ims-content';
import { LabelPage } from '../pages/Resources/label/label';
import { UrlPage } from '../pages/Resources/url/url';
import { PageResourcePage } from '../pages/Resources/page-resource/page-resource';
import { FilePage } from '../pages/Resources/file/file';
import { ChatIntroPage } from '../pages/activites/chat/chat-intro/chat-intro';
import { TimedQuizPage } from '../pages/activites/quiz/timed-quiz/timed-quiz';
import { QuestionPage } from '../pages/activites/quiz/question/question';
import { AttemptSummaryPage } from '../pages/activites/quiz/attempt-summary/attempt-summary';
import { AttemptReviewPage } from '../pages/activites/quiz/attempt-review/attempt-review';
import { ForumPostsPage } from '../pages/activites/forum/forum-posts/forum-posts';
Pro.init('YOUR_APP_ID', {
  appVersion: 'APP_VERSION'
})


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    CalenderEventsPage,
    GradesPage,
    MessagesPage,
    MyFilesPage,
    NotificationsPage,
    SiteHomePage,
    TimelinePage,
    CouresesPage,
    UserProfilePage,
    CourseGradePage,
    ItemGradePage,
    CourseSectionsPage,
    ContactListPage,
    MessageListPage,
    SectionContentPage,
    AssignmentPage,
    ChatPage,
    ChoicePage,
    DatabasePage,
    ExternalToolsPage,
    FeedbackPage,
    ForumPage,
    GlossaryPage,
    LessonPage,
    QuizPage,
    ScormPage,
    SurveyPage,
    WikiPage,
    WorkshopPage,
    BookPage,
    FilePage,
    FolderPage,
    ImsContentPage,
    LabelPage,
    UrlPage,
    PageResourcePage,
    ChatIntroPage,
    TimedQuizPage,
    QuestionPage,
    AttemptSummaryPage,
    AttemptReviewPage,
    ForumPostsPage
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
    CalenderEventsPage,
    GradesPage,
    MessagesPage,
    MyFilesPage,
    NotificationsPage,
    SiteHomePage,
    TimelinePage,
    CouresesPage,
    UserProfilePage,
    CourseGradePage,
    ItemGradePage,
    CourseSectionsPage,
    ContactListPage,
    MessageListPage,
    SectionContentPage,
    AssignmentPage,
    ChatPage,
    ChoicePage,
    DatabasePage,
    ExternalToolsPage,
    FeedbackPage,
    ForumPage,
    GlossaryPage,
    LessonPage,
    QuizPage,
    ScormPage,
    SurveyPage,
    WikiPage,
    WorkshopPage,
    BookPage,
    FolderPage,
    ImsContentPage,
    LabelPage,
    UrlPage,
    PageResourcePage,
    FilePage,
    ChatIntroPage,
    TimedQuizPage,
    QuestionPage,
    AttemptSummaryPage,
    AttemptReviewPage,
    ForumPostsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MoodleProvider,
  ]
})
export class AppModule { }
