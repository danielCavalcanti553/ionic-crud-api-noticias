import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/service/noticia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/model/message';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/model/noticia';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-noticias-update',
  templateUrl: './noticias-update.page.html',
  styleUrls: ['./noticias-update.page.scss'],
})
export class NoticiasUpdatePage implements OnInit {

  noticia: Noticia = new Noticia();
  formGroup: FormGroup;
  msg: string = null;

  loading = this.loadingCtrl.create({
    cssClass: 'my-custom-class',
    message: 'Carregando...',
    duration: 2000
  });

  myAlert(texto){
    let alert = this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Mensagem',
      subHeader: '',
      message: 'Cadastrado com sucesso',
      buttons: ['OK']
    });
    alert.then(data=>{
      data.present();
    })
  }

  constructor(
    private noticiaServ: NoticiaService,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.iniciarForm();
  }

  ngOnInit() {

    this.actRoute.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.noticiaServ.getNoticiaById(id).subscribe(data => {
        this.noticia = data;
        console.log(data);
        this.iniciarForm();
      });
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.noticia.id, [Validators.required, Validators.minLength(5)]],
      titulo: [this.noticia.titulo, [Validators.required, Validators.minLength(5)]],
      conteudo: [this.noticia.conteudo, [Validators.required, Validators.minLength(5)]],
      imagem: [this.noticia.imagem, [Validators.required, Validators.minLength(5)]]
    })
  }

  atualizar() {
    this.loading.then(load => {
      load.present();
      
      this.noticiaServ.atualiza(this.formGroup.value).subscribe(data => {
        
        load.dismiss();
        let message: Message = data;

        
          if (message.status === 200) {
            this.myAlert("Cadastrado com sucesso");
          } else {
            this.myAlert("Erro ao cadastrar");
          }
        
      })
    })
  }
  

}
