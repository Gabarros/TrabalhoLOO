import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private login: FormGroup;
  private list = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, public formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      senha: [''],
    });
  }


  
  logForm(form) {
    console.log("FORM RECEBIDO:   " + form.value.nome);
  
    this.login.value.nome = form.value.nome;
    this.login.value.data = form.value.email;
    this.login.value.senha = form.value.senha;
    this.login.value.id = 1;
    if (this.list.indexOf(this.login.value) >= 0) {
      console.log("Objeto já existe na lista");
      const alerta = this.alertController.create({
        title: 'Login já existe!',
        subTitle: "O nome "+ this.login.value.nome+" já foi cadastrado...",
        buttons: ['Ok']
  
      });
      alerta.present();
    } else {
      console.log("Objeto não existe na lista");
      console.log(this.login.value);
      this.list.push(this.login.value);
      console.log(this.list);
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
