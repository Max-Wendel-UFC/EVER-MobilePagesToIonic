import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendRioSelecionadoPage } from '../pages/calend-rio-selecionado/calend-rio-selecionado';
import { GerenciarContaPage } from '../pages/gerenciar-conta/gerenciar-conta';
import { MinhasInscriEsPage } from '../pages/minhas-inscri-es/minhas-inscri-es';
import { CalendarioPage } from '../pages/calendario/calendario';
import { HomePage } from '../pages/home/home';
import { InscreverSePage } from '../pages/inscrever-se/inscrever-se';
import { AtividadeSelecionadasPage } from '../pages/atividade-selecionadas/atividade-selecionadas';
import { AtividadeInfoPage } from '../pages/atividade-info/atividade-info';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToCalendRioSelecionado(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalendRioSelecionadoPage);
  }goToGerenciarConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GerenciarContaPage);
  }goToMinhasInscriEs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MinhasInscriEsPage);
  }goToCalendario(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CalendarioPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToInscreverSe(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InscreverSePage);
  }goToAtividadeSelecionadas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AtividadeSelecionadasPage);
  }goToAtividadeInfo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AtividadeInfoPage);
  }
}
