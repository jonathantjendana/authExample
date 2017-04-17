import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  Signup() {
    let details: UserDetails = { 'email': 'email@email.com', 'password': '123456' };

    this.auth.signup(details).then(() => {
      // `this.user` is now registered
      console.log("signed up");
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          // handle other errors
        }
      }
    });
  }

}
