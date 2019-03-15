import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private tarefa: FormGroup;
  private list = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, public formBuilder: FormBuilder) {
    this.tarefa = this.formBuilder.group({
      id: [''],
      nome: [''],
      data: [''],
      status: [''],
    });
    this.apagar = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  logApagar(person) {
    console.log("ID PERSON: " + person.id)
    this.list.forEach(element => {
      if (element.id == person.id) {
        console.log("O elemento " + element.nome + " precisa ser excluído!");
        this.list.splice(this.list.indexOf(person), 1);
        console.log(this.list);
      }
    });
  }
  
  logForm(form) {
    console.log("FORM RECEBIDO:   " + form.value.nome);
  
    this.tarefa.value.nome = form.value.nome;
    this.tarefa.value.data = form.value.data;
    this.tarefa.value.status = form.value.status;
    this.tarefa.value.id = 1;
    if (this.list.indexOf(this.tarefa.value) >= 0) {
      console.log("Objeto já existe na lista");
      const alerta = this.alertController.create({
        title: 'Tarefa já existe!',
        subTitle: "O nome "+ this.tarefa.value.nome+" já foi cadastrado...",
        buttons: ['Ok']
  
      });
      alerta.present();
    } else {
      console.log("Objeto não existe na lista");
      console.log(this.tarefa.value);
      this.list.push(this.tarefa.value);
      console.log(this.list);
    }
  
  }

}
