import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { File, DirectoryEntry } from '@ionic-native/file';
import { UtilsProvider } from '../../../providers/utils/utils';
import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  public allBookInfo
  public introBookInfo = {}
  public courseId
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    public moodle: MoodleProvider,
    private file: File,
    public utils: UtilsProvider,
    public fileOpner: FileOpener
  ) {
    /* this.allBookInfo = this.navParams.get("book")
    this.courseId = this.navParams.get("cId")
    this.moodle.getCourseBooks(11)
      .map(res => res)
      .subscribe((books) => {
        books.books.forEach(book => {
          if (4 == book.id)
         if (this.allBookInfo.instance == book.id)  {
            this.introBookInfo = book
          }
        });
      }) */
  }
  public dataSource
  download(url) {
    /* const fileTransfer: FileTransferObject = this.transfer.create();
    console.log(url)
    this.file.checkDir(this.file.dataDirectory, 'test')
      .then(() => {
        fileTransfer.download(url, this.file.dataDirectory + "test/test23.html")
          .then(() => {
            this.utils.showAlert("done", "ok!");
            let ob = ''
            this.file.resolveDirectoryUrl(this.file.dataDirectory)
            .then((directoryEntry: DirectoryEntry)=>{
              this.file.getFile(directoryEntry, 'test/test23.html', { create: false })
              .then(()=>{
                this.utils.showAlert("fileOpen","OK!")
              })
              .catch(()=>{
                this.utils.showAlert("fileOpen","Error!")
              })
            })
            this.file.readAsDataURL(this.file.dataDirectory, "test/test23.html")
              .then((t) => {
                this.utils.showAlert(t, "Catch data Done")
                this.dataSource = t
              })
              .catch((e) => {
                this.utils.showAlert(JSON.stringify(e), "Catch data error")
              })
            fileTransfer.download('http://167.99.243.240/moodle/webservice/pluginfile.php/183/mod_book/chapter/5/Math-Set1-Question8.gif?token=d321461d0553452dcb4620dd89842f03', this.file.dataDirectory + "Math-Set1-Question8.gif")
              .then(() => {
                this.utils.showAlert("image done", "OK!")
              })
              .catch(()=>{
                this.utils.showAlert("image NOT done", "NOT OK!")
              })
          })
          .catch((er) => {
            this.utils.showAlert(JSON.stringify(er), "Error")
            this.file.readAsDataURL(this.file.dataDirectory, "test/test23.html")
              .then((t) => {
                this.utils.showAlert(JSON.stringify(t), "Catch data Done")
              })
              .catch((e) => {
                this.utils.showAlert(JSON.stringify(e), "Catch data error")
              })
          });

      })
      .catch((er) => {
        this.file.createDir(this.file.dataDirectory, "test", false)
          .then(() => {
            this.utils.showAlert("dir done", "OK!")
          })
          .catch((e) => {
            this.utils.showAlert(e, "error make dir")
          })
        this.utils.showAlert(JSON.stringify(er), "file Found")
      })
 */
  }
  ionViewDidLoad() {
   /*  this.download('http://167.99.243.240/moodle/webservice/pluginfile.php/183/mod_book/chapter/5/index.html?token=d321461d0553452dcb4620dd89842f03') */
  }

}
