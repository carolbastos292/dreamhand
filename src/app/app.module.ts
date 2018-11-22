import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

 export const firebaseConfig = {
    apiKey: "AIzaSyB7M7LFVTVfH0On-ewrarrFuJce7HARYZY",
    authDomain: "dreamhand-ce810.firebaseapp.com",
    databaseURL: "https://dreamhand-ce810.firebaseio.com",
    projectId: "dreamhand-ce810",
    storageBucket: "dreamhand-ce810.appspot.com",
    messagingSenderId: "832309685084"
  };


@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
