import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmarPage } from '../confirmar/confirmar';

@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html'
})
export class AtividadesPage {

  constructor(public navCtrl: NavController) {
  }
  goToConfirmar(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmarPage);
  }
}
