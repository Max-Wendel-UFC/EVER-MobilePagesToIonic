import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalendRioSelecionadoPage } from '../pages/calend-rio-selecionado/calend-rio-selecionado';
import { AtividadesPage } from '../pages/atividades/atividades';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CalendarioPage } from '../pages/calendario/calendario';
import { Mensagem1Page } from '../pages/mensagem1/mensagem1';
import { Mensagem2Page } from '../pages/mensagem2/mensagem2';
import { ConfirmarPage } from '../pages/confirmar/confirmar';
import { LoginPage } from '../pages/login/login';
import { GerenciarContaPage } from '../pages/gerenciar-conta/gerenciar-conta';
import { MinhasInscriEsPage } from '../pages/minhas-inscri-es/minhas-inscri-es';
import { HomePage } from '../pages/home/home';
import { CadastreSePage } from '../pages/cadastre-se/cadastre-se';
import { RecuperarSenhaPage } from '../pages/recuperar-senha/recuperar-senha';
import { InscreverSePage } from '../pages/inscrever-se/inscrever-se';
import { AtividadeSelecionadasPage } from '../pages/atividade-selecionadas/atividade-selecionadas';
import { AtividadeInfoPage } from '../pages/atividade-info/atividade-info';
import { TotalPage } from '../pages/total/total';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CalendRioSelecionadoPage,
    AtividadesPage,
    MensagensPage,
    TabsControllerPage,
    CalendarioPage,
    Mensagem1Page,
    Mensagem2Page,
    ConfirmarPage,
    LoginPage,
    GerenciarContaPage,
    MinhasInscriEsPage,
    HomePage,
    CadastreSePage,
    RecuperarSenhaPage,
    InscreverSePage,
    AtividadeSelecionadasPage,
    AtividadeInfoPage,
    TotalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendRioSelecionadoPage,
    AtividadesPage,
    MensagensPage,
    TabsControllerPage,
    CalendarioPage,
    Mensagem1Page,
    Mensagem2Page,
    ConfirmarPage,
    LoginPage,
    GerenciarContaPage,
    MinhasInscriEsPage,
    HomePage,
    CadastreSePage,
    RecuperarSenhaPage,
    InscreverSePage,
    AtividadeSelecionadasPage,
    AtividadeInfoPage,
    TotalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}