import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';
import { CalendRioSelecionadoPage } from '../calend-rio-selecionado/calend-rio-selecionado';
import { CalendarioPage } from '../calendario/calendario';
import { AtividadesPage } from '../atividades/atividades';
import { MensagensPage } from '../mensagens/mensagens';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = CalendarioPage;
  tab2Root: any = AtividadesPage;
  tab3Root: any = MensagensPage;
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
