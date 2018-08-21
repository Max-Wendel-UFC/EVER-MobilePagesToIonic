import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';

@Component({
  selector: 'page-minhas-inscri-es',
  templateUrl: 'minhas-inscri-es.html'
})
export class MinhasInscriEsPage {

  constructor(public navCtrl: NavController) {
  }
  goToCalendario(params){
    if (!params) params = {};
    this.navCtrl.push(CalendarioPage);
  }goToCalendRioSelecionado(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioSelecionadoPage);
  }
}
