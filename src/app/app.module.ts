import { PayslipLinePage } from './../pages/OdooPages/payroll/payslips/payslip-line/payslip-line';
import { PayslipDetailsPage } from './../pages/OdooPages/payroll/payslips/payslip-details/payslip-details';
import { LeaveToApprovePage } from './../pages/OdooPages/time-management/leaves/leave-to-approve/leave-to-approve';
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
import { RichTextComponent } from '../components/rich-text/rich-text';
import { AddDiscussionPage } from '../pages/activites/forum/add-discussion/add-discussion';
import { CalenderEventsPage } from '../pages/calender-events/calender-events';
import { NewHomePage } from '../pages/new-home/new-home';
import { OdooProvider } from '../providers/odoo/odoo';
import { OdooLoginPage } from '../pages/OdooPages/odoo-login/odoo-login';
import { OdooProfilrPage } from '../pages/OdooPages/odoo-profilr/odoo-profilr';
import { TimeManagementPage } from '../pages/OdooPages/time-management/time-management';
import { ProfilePrivteInfoPage } from '../pages/OdooPages/odoo-profilr/profile-privte-info/profile-privte-info';
import { ProfileWorkInfoPage } from '../pages/OdooPages/odoo-profilr/profile-work-info/profile-work-info';
import { ProfileAssetsPage } from '../pages/OdooPages/odoo-profilr/profile-assets/profile-assets';
import { ProfileHrSettingsPage } from '../pages/OdooPages/odoo-profilr/profile-hr-settings/profile-hr-settings';
import { IonicStorageModule } from '@ionic/storage';
import { ProfileOrganizationChartPage } from '../pages/OdooPages/odoo-profilr/profile-organization-chart/profile-organization-chart';
import { AttendancePage } from '../pages/OdooPages/time-management/attendance/attendance';
import { LeavesPage } from '../pages/OdooPages/time-management/leaves/leaves';
import { LeaveRequestPage } from '../pages/OdooPages/time-management/leaves/leave-request/leave-request';
import { LeaveBalancePage } from '../pages/OdooPages/time-management/leaves/leave-balance/leave-balance';
import { PayslipsPage } from '../pages/OdooPages/payroll/payslips/payslips';
import { ExpensesPage } from '../pages/OdooPages/expenses/expenses';
import { MyExpensesPage } from '../pages/OdooPages/expenses/my-expenses/my-expenses';
import { AccountantPage } from '../pages/OdooPages/expenses/accountant/accountant';
import { ExpensesToApprovePage } from '../pages/OdooPages/expenses/my-expenses/expenses-to-approve/expenses-to-approve';
import { ExpensesToSubmitPage } from '../pages/OdooPages/expenses/my-expenses/expenses-to-submit/expenses-to-submit';
import { MyRefusedReportsPage } from '../pages/OdooPages/expenses/my-expenses/my-refused-reports/my-refused-reports';
import { MyReportsPage } from '../pages/OdooPages/expenses/my-expenses/my-reports/my-reports';
import { CreateExpensePage } from '../pages/OdooPages/expenses/my-expenses/create-expense/create-expense';
import { EmployessPage } from '../pages/OdooPages/employess/employess';


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
    LabelPage,
    AddDiscussionPage,
    RichTextComponent,
    CalenderEventsPage,
    NewHomePage,
    OdooLoginPage,
    OdooProfilrPage,
    TimeManagementPage,
    ProfileAssetsPage,
    ProfileHrSettingsPage,
    ProfilePrivteInfoPage,
    ProfileWorkInfoPage,
    ProfileOrganizationChartPage,
    AttendancePage,
    LeavesPage,
    LeaveRequestPage,
    LeaveToApprovePage,
    LeaveBalancePage,
    PayslipsPage,
    PayslipDetailsPage,
    PayslipLinePage,
    ExpensesPage,
    MyExpensesPage,
    ExpensesToApprovePage,
    AccountantPage,
    ExpensesToSubmitPage,
    MyRefusedReportsPage,
    MyReportsPage,
    CreateExpensePage,
    EmployessPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule,
    IonicStorageModule.forRoot()
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
    LabelPage,
    AddDiscussionPage,
    CalenderEventsPage,
    NewHomePage,
    OdooLoginPage,
    OdooProfilrPage,
    TimeManagementPage,
    ProfileAssetsPage,
    ProfileHrSettingsPage,
    ProfilePrivteInfoPage,
    ProfileWorkInfoPage,
    ProfileOrganizationChartPage,
    AttendancePage,
    LeavesPage,
    LeaveRequestPage,
    LeaveToApprovePage,
    LeaveBalancePage,
    PayslipsPage,
    PayslipDetailsPage,
    PayslipLinePage,
    ExpensesPage,
    MyExpensesPage,
    ExpensesToApprovePage,
    AccountantPage,
    ExpensesToSubmitPage,
    MyRefusedReportsPage,
    MyReportsPage,
    CreateExpensePage,
    EmployessPage
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
    File,
    OdooProvider,
  ]
})
export class AppModule { }
