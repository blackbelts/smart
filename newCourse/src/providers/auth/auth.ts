import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private user:firebase.User
  constructor( public afAuth: AngularFireAuth ) {
    afAuth.authState.subscribe(user=>{
      this.user=user
    })
  }
  signIn(user:{email:string,password:string}){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
  }

}
