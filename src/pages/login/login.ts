import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCalendRioSelecionado(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioSelecionadoPage);
  }
}
