import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Auth, User, GoogleAuth, FacebookAuth } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { NativeStorage } from 'ionic-native';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loginForm: FormGroup
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public auth: Auth,
    public user: User,
    public googleAuth: GoogleAuth,
    public loadingCtrl: LoadingController,
    public facebookAuth: FacebookAuth
  ) {
    let self = this;
    self.loginForm = self.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  googleLogin() {

    let self = this;
    let nav = self.navCtrl;
    let loading = self.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.googleAuth.login().then(function (user) {
      loading.dismiss();

      NativeStorage.setItem('user', {
        name: self.user.social.google.data.full_name,
        email: self.user.social.google.data.email,
        picture: self.user.social.google.data.profile_picture
      }).then(function () {
        console.log(user);
        console.log(self.user.social.google.data.full_name);
        nav.setRoot(HomePage);
      }, function (error) {
        console.log(error);
      })

    }, function (error) {
      loading.dismiss();
    })
  }

  facebookLogin() {
    let self = this;
    let nav = self.navCtrl;
    let loading = self.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    self.facebookAuth.login().then(function (user) {
      loading.dismiss();

      console.log(user);
      console.log(self.user.social.facebook.data.full_name);
      nav.setRoot(HomePage);
    })
  }

  submitForm() {
    let self = this;
    let loginData = self.loginForm.value;
    console.dir(loginData);
    let userDetails = {
      'email': loginData.email,
      'password': loginData.password
    };
    // self.auth.login('basic', userDetails).then()
  }

}
