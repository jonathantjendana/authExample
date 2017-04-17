import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'ebd4ba2a'
  },
  'auth': {
    'google': {
      'webClientId': '542649079843-n5uee4s1fb1popmmog68ukg0hps9jagn.apps.googleusercontent.com'
      // 'scope': ['permission1', 'permission2']
    },
    'facebook':{
      'scope': []
    }
  }
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
