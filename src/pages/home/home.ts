import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { Signup } from '../signup/signup';
import { NativeStorage } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signup = Signup
  user_picture: string
  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {
    let self = this;
    NativeStorage.getItem('user').then(function(user){
      console.log(user.picture);
      self.user_picture = user.picture;
    })
  }

}
