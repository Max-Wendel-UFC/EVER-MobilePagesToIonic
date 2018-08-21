import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Mensagem1Page } from '../mensagem1/mensagem1';
import { Mensagem2Page } from '../mensagem2/mensagem2';

@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html'
})
export class MensagensPage {

  constructor(public navCtrl: NavController) {
  }
  goToMensagem1(params){
    if (!params) params = {};
    this.navCtrl.push(Mensagem1Page);
  }goToMensagem2(params){
    if (!params) params = {};
    this.navCtrl.push(Mensagem2Page);
  }
}
