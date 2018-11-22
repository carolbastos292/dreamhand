import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Perfil</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <h3 text-center>Escolha seu perfil</h3>
    <ion-grid>
    <ion-row text-center>
        <ion-col>
          <ion-img class="imgPerfil"  src="./assets/imgs/student.png" (click)="studentPage()"></ion-img>
          <ion-label text-center>Estudante</ion-label>
        </ion-col>
        <ion-col>
          <ion-img class="imgPerfil"  src="./assets/imgs/teacher.png" (click)="teacherPage()"></ion-img>
          <ion-label text-center>Professor</ion-label>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>`
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  studentPage() {
      this.navCtrl.setRoot('StudentPage');
    }

  teacherPage() {
        this.navCtrl.setRoot('TeacherPage');
    }



}
