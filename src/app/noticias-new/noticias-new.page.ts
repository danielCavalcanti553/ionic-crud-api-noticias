import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/service/noticia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/model/message';
import { TemplateService } from 'src/service/template';

@Component({
  selector: 'app-noticias-new',
  templateUrl: './noticias-new.page.html',
  styleUrls: ['./noticias-new.page.scss'],
})
export class NoticiasNewPage implements OnInit {
  formGroup: FormGroup;
  msg : string = null;

  constructor(
    private noticiaServ: NoticiaService,
    private formBuilder: FormBuilder,
    private template : TemplateService) {

      this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      conteudo: ['', [Validators.required, Validators.minLength(5)]],
      imagem: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  cadastrar(){
    
    this.template.loading.then(load =>{
      load.present();

      this.noticiaServ.novo(this.formGroup.value).subscribe(data=>{
        let reponse : Message = data;
        console.log(data);
        load.dismiss();
        this.template.myAlert("Cadastrado com sucesso");
        this.iniciarForm();
      })
    })
    
    
   
    
  }
}
