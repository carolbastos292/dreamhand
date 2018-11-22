import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
  template:  `
  <ion-header>
    <ion-navbar>
      <ion-title>Área do Aluno</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
  <ion-card>
    <iframe width="350" height="315" src="https://www.youtube.com/embed/PxcB4SvSFJA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <ion-card-content>
      <ion-card-title>
        Vogais em Libras
        </ion-card-title>
      <ion-label>
        Aula sobre vogais em libras
      </ion-label>
    </ion-card-content>
  </ion-card>
  </ion-content>`
})
export class StudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
