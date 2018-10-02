import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Course } from '../../model/course';
import { CourseProvider } from '../../providers/course/course';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {
  public course:Course={
    name:'',
    code:'',
    desc:"",
    startDate:"",
    endDate:'',
    dayAbsance:0,
    lastTime:'',
    type:"free",
    users:["teste","eiru","jfdk","fjdh",'sdhfj',"hsdfj","dshj","hfdsj","hjfd","jgfs"]
  }
  public btn_edit=false
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public courseProvider:CourseProvider,
    public utils:UtilsProvider
  ) {
  }

  ionViewDidLoad() {
    this.btn_edit=this.navParams.get("btnedit")
    if(this.btn_edit==undefined){
      this.btn_edit=false
      console.log("done")
    }else{
      this.btn_edit=true
      this.course=this.navParams.get("course")
      console.log(this.course)
    }
  }
  updateCourse(){
    this.courseProvider.updateCourse(this.course)
      .then(
        ()=>{
          console.log("done update")
        },
        error=>{
          this.utils.BasicAlert("خطا","ERROR")
        }
      )
  }
  addCourse(){
    console.log(this.course)
    this.courseProvider.addCourse(this.course)
      .then(
        ()=>{
          console.log("done")
        },
        error=>{
          this.utils.BasicAlert("خطا","ERROR")
        }
      )
  }
}
