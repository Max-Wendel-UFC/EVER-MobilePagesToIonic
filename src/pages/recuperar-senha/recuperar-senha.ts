import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';

@Component({
  selector: 'page-recuperar-senha',
  templateUrl: 'recuperar-senha.html'
})
export class RecuperarSenhaPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCalendRioSelecionado(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioSelecionadoPage);
  }
}
