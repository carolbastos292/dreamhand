import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',

})
export class InitialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams   ) {
  }

    register(){
        this.navCtrl.push('RegisterPage');
    }

    login(){
        this.navCtrl.push('LoginPage');
    }



}

