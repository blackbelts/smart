import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { MoodleProvider } from '../../../providers/moodle/moodle';
import { File } from '@ionic-native/file';
import { UtilsProvider } from '../../../providers/utils/utils';

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
    public utils: UtilsProvider
  ) {
    this.allBookInfo = this.navParams.get("book")
    this.courseId = this.navParams.get("cId")
    console.log(this.courseId)
    this.moodle.getCourseBooks(11)
      .map(res => res)
      .subscribe((books) => {
        console.log(typeof books.books)
        books.books.forEach(book => {
          if (4 == book.id)
         /*  if (this.allBookInfo.instance == book.id) */ {
            this.introBookInfo = book
          }
        });
      })
    console.log(this.allBookInfo)
  }
  download(url) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.dataDirectory + "test.html")
      .then(() => {
        this.utils.showAlert("done", "ok!");
      })
      .catch((er) => {
        this.utils.showAlert(JSON.stringify(er), "Error")
      });
  }
  ionViewDidLoad() {
    this.download('167.99.243.240/moodle/webservice/pluginfile.php/183/mod_book/chapter/5/index.html?token=d321461d0553452dcb4620dd89842f03')
  }

}
