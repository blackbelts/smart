import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MoodleProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const siteUrl = 'http://167.99.243.240/moodle';
const restUrl = '/webservice/rest/server.php?';
const restFormat = '&moodlewsrestformat=json';
@Injectable()
export class MoodleProvider {
  private token;
  private userName;
  private password;
  private userId;
  loginUrl = '/login/token.php?';
  constructor(public http: HttpClient) {
    //this.token='c76cc96ea49993aa908db97c5cc528f8';
/*     this.token = 'd321461d0553452dcb4620dd89842f03'
 */  }
  /************************Class Function************************/
  /* set value of the token for the user */
  setToken(token) {
    this.token = token;
  }

  /* get the value of the token */
  getToken() {
    return this.token;
  }
  getSiteUrl() {
    return siteUrl;
  }
  getUserId() {
    return this.userId;
  }

  setUserId(id) {
    this.userId = id;
  }

  getUserName() {
    return this.userName;
  }
  setUserName(username) {
    this.userName = username;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
  /************************Login************************/

  /* requset login function */
  loginRequest(username, password) {
    return this.http.get(
      siteUrl + this.loginUrl
      + 'username=' + username
      + '&password=' + password
      + '&service=moodle_mobile_app'
    ).map((response) => {
      return JSON.parse(JSON.stringify(response));
    });
  }
  /* *********************LOGOUT *********************/
  logout() {
    this.setToken("")
    this.setPassword("")
    this.setUserId("")
    this.setUserName("")
  }

  /************************user************************/
  /* get user information */
  getUserInformation(filed, value) {
    let coreFun = 'core_user_get_users_by_field';
    console.log( siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&field=' + filed
      + '&values[0]=' + value)
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&field=' + filed
      + '&values[0]=' + value)
      .map((response) => {
        return response;
      });
  }

  /* get enrolled courses for a specific user */
  getUserCourses(userid) {
    let coreFun = 'core_enrol_get_users_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&userid=' + userid)
      .map((response) => {
        return response;
      });
  }

  /************************Courses Information************************/
  /* Returns a list of lessons in a provided course, */
  getCourseLessons(courseId) {
    let coreFun = 'mod_lesson_get_lessons_by_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseids[0]=' + courseId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /*
    get all content for provided course
    optionFiled ===> it's value
    [
      excludemodules (bool) ===> Do not return modules, return only the sections structure
      excludecontents (bool)  ===> Do not return module contents (i.e: files inside a resource)
      sectionid (int)  ===> Return only this section
      sectionnumber (int)  ===> Return only this section with number (order)
      cmid (int)  ===> Return only this module information (among the whole sections structure)
      modname (string)  ===> Return only modules with this name "label, forum, etc..."
      modid (int)  ===> Return only the module with this id (to be used with modname
    ]
    value =====> the value of optionFiled
  */
  getCourseContent(courseId, optionFiled, value) {
    let coreFun = 'core_course_get_contents';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseid=' + courseId
      + '&options[0][name]=' + optionFiled
      + '&options[0][value]=' + value
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getCourseByFiled(field, value) {

    let coreFun = 'core_course_get_courses_by_field';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&field=' + field
      + '&value=' + value
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getCourseEnrolledUsers(courseid) {

    let coreFun = 'core_enrol_get_enrolled_users';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseid=' + courseid
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /************************Grades************************/

  /* Get the given user courses final grades */
  finalGradesForAllCourses(userId) {
    let coreFun = 'gradereport_overview_get_course_grades';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&userid=' + userId
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /*Returns the complete list of grade items for users in a course*/
  getItemsGrade(couresId, userId, groupid) {
    let coreFun = 'gradereport_user_get_grade_items';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseid=' + couresId
      + '&userid=' + userId
      + '&groupid=' + groupid
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /************************Notifications************************/

  /* Retrieve the count of unread popup notifications for a given user */
  retriveCountUnreadNotifucations(userId) {
    let coreFun = 'message_popup_get_unread_popup_notification_count';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&userid=' + userId
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /************************Events************************/
  /* Get calendar action events by tiemsort */
  /*
    *timesortfrom (Default to "0") ===>Time sort from
    * timesortto (Default to "null" or 0) ===> Time sort to
    * aftereventid (Default to "0") ===> The last seen event id
    * limitnum (Default to "20") === >Limit number
  */
  calenderEventSortTime(timesortfrom = 0, timesortto = 0, aftereventid = 0, limitnum = 20) {
    let coreFun = 'core_calendar_get_action_events_by_timesort';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&timesortfrom=' + timesortfrom
      + '&timesortto=' + timesortto
      + '&aftereventid=' + aftereventid
      + '&limitnum=' + limitnum
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /* Get calendar action events by course */
  calenderEventByCourse(courseId, timesortfrom, timesortto, aftereventid, limitnum) {
    let coreFun = 'core_calendar_get_action_events_by_course';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseid=' + courseId
      + '&timesortfrom=' + timesortfrom
      + '&timesortto=' + timesortto
      + '&aftereventid' + aftereventid
      + '&limitnum' + limitnum
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /************************Contacts & Messages ************************/

  /* get user Contacts */
  getUserContacts(userid) {
    let coreFun = 'core_message_data_for_messagearea_contacts';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&userid=' + userid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getUserMessagesList(userid) {
    let coreFun = 'core_message_data_for_messagearea_conversations';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&userid=' + userid
      + '&limitfrom=0')
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  /*////////////////Moodle Activity /////////////*/
  /* 1- Moodle choice Activity */
  getModChoiceOptions(choiceId) {
    let coreFun = 'mod_choice_get_choice_options';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&choiceid=' + choiceId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  submitChoiceAnswer(choiceId, answer) {
    let coreFun = 'mod_choice_submit_choice_response';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&choiceid=' + choiceId
      + '&responses[0]=' + answer)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  deleteSubmitedChoice(choiceId) {
    let coreFun = 'mod_choice_delete_choice_responses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&choiceid=' + choiceId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /* 2- Quiz */
  getQuizesByCourse(courseId) {
    let coreFun = 'mod_quiz_get_quizzes_by_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseids[0]=' + courseId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getQuizAccessInfo(quizId) {
    let coreFun = 'mod_quiz_get_quiz_access_information';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&quizid=' + quizId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  getUserAttempts(quizId, userid = 0, atepStatus = "finished") {
    let coreFun = 'mod_quiz_get_user_attempts';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&quizid=' + quizId
      + '&userid=' + userid
      + '&status=' + atepStatus
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  getQuizGrade(quizId, userId = 0) {
    let coreFun = 'mod_quiz_get_user_best_grade';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&quizid=' + quizId
      + '&userid=' + userId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  startQuizAttempt(quizid) {
    let coreFun = 'mod_quiz_start_attempt';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&quizid=' + quizid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getAttemptData(attempetid, page) {
    let coreFun = 'mod_quiz_get_attempt_data';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&attemptid=' + attempetid
      + '&page=' + page)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  submitQestionAnswer(attemptid, qSlots, qSequencecheckName, qSequencecheckValue, qName, qAns, timeup) {
    let coreFun = 'mod_quiz_process_attempt';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&attemptid=' + attemptid
      + '&timeup=' + timeup
      + '&data[0][name]=slots'
      + '&data[0][value]=' + qSlots
      + '&data[1][name]=' + qSequencecheckName
      + '&data[1][value]=' + qSequencecheckValue
      + '&data[2][name]=' + qName
      + '&data[2][value]=' + qAns
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  finishQuiz(attemptid, timeup) {
    let coreFun = 'mod_quiz_process_attempt';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&attemptid=' + attemptid
      + '&timeup=' + timeup
    )
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getQuizAttemptSummery(attemptid) {
    let coreFun = 'mod_quiz_get_attempt_summary';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&attemptid=' + attemptid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getQuizAttemptReview(attemptid) {
    let coreFun = 'mod_quiz_get_attempt_review';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&attemptid=' + attemptid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  /*3- Forum */
  canAddForumDissuction(id) {
    let coreFun = 'mod_forum_can_add_discussion';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&forumid=' + id)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getForumInCourse(cId) {
    let coreFun = 'mod_forum_get_forums_by_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseids[0]=' + cId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getForumDiscussions(forumId) {
    let coreFun = 'mod_forum_get_forum_discussions_paginated';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&forumid=' + forumId)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  getForumDisussionsPosts(discussionId) {

    let coreFun = 'mod_forum_get_forum_discussion_posts';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&discussionid=' + discussionId
      + '&sortdirection=ASC')
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
  /*/////////////////// Moodle resources //////////////////////*/
  /* 1-Url */
  getUrl(courseid) {
    let coreFun = 'mod_url_get_urls_by_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseids[0]=' + courseid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }

  /* 2-page */
  getpage(courseid) {
    let coreFun = 'mod_page_get_pages_by_courses';
    return this.http.get(
      siteUrl + restUrl
      + 'wstoken=' + this.getToken()
      + '&wsfunction=' + coreFun
      + restFormat
      + '&courseids[0]=' + courseid)
      .map((response) => {
        return JSON.parse(JSON.stringify(response));
      });
  }
}
