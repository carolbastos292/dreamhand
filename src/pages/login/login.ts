import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user = {} as User;


  constructor(private ofAuth: AngularFireAuth,
  	public navCtrl: NavController, public navParams: NavParams) {
  }

 async login(user: User){
  	try{
	  	const result = await this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
		if (result)
			this.navCtrl.setRoot('StudentPage');
	}catch(e){
	  	console.error(e);	
	}
  }

 register(){
 	this.navCtrl.push('RegisterPage');
 }
}
