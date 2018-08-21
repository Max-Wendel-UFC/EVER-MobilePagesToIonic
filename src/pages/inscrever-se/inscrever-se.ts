import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtividadeSelecionadasPage } from '../atividade-selecionadas/atividade-selecionadas';
import { AtividadeInfoPage } from '../atividade-info/atividade-info';
import { InscreverSePage } from '../inscrever-se/inscrever-se';
import { MinhasInscriEsPage } from '../minhas-inscri-es/minhas-inscri-es';
import { CalendarioPage } from '../calendario/calendario';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';

@Component({
  selector: 'page-inscrever-se',
  templateUrl: 'inscrever-se.html'
})
export class InscreverSePage {

  constructor(public navCtrl: NavController) {
  }
  goToAtividadeSelecionadas(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadeSelecionadasPage);
  }goToAtividadeInfo(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadeInfoPage);
  }goToInscreverSe(params){
    if (!params) params = {};
    this.navCtrl.push(InscreverSePage);
  }goToMinhasInscriEs(params){
    if (!params) params = {};
    this.navCtrl.push(MinhasInscriEsPage);
  }goToCalendario(params){
    if (!params) params = {};
    this.navCtrl.push(CalendarioPage);
  }goToCalendRioSelecionado(params){
    if (!params) params = {};
    this.navCtrl.push(CalendRioSelecionadoPage);
  }
}
