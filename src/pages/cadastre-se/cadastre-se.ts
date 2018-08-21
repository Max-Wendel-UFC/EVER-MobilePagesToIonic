import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InscreverSePage } from '../inscrever-se/inscrever-se';
import { AtividadeSelecionadasPage } from '../atividade-selecionadas/atividade-selecionadas';
import { AtividadeInfoPage } from '../atividade-info/atividade-info';
import { MinhasInscriEsPage } from '../minhas-inscri-es/minhas-inscri-es';
import { CalendarioPage } from '../calendario/calendario';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';

@Component({
  selector: 'page-cadastre-se',
  templateUrl: 'cadastre-se.html'
})
export class CadastreSePage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToInscreverSe(params){
    if (!params) params = {};
    this.navCtrl.push(InscreverSePage);
  }goToAtividadeSelecionadas(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadeSelecionadasPage);
  }goToAtividadeInfo(params){
    if (!params) params = {};
    this.navCtrl.push(AtividadeInfoPage);
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
