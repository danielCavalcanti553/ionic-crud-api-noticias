import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/model/noticia';
import { NavParams, NavController } from '@ionic/angular';
import { NOTICIAS } from 'src/environments/mock-list-noticias';
import { NoticiaService } from 'src/service/noticia.service';

@Component({
  selector: 'app-noticias-detalhe',
  templateUrl: './noticias-detalhe.page.html',
  styleUrls: ['./noticias-detalhe.page.scss'],
})
export class NoticiasDetalhePage implements OnInit {

  noticia : Noticia = new Noticia();

  constructor(private actRoute : ActivatedRoute,
    private noticiaServ : NoticiaService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(resp=>{

      let id = resp.get('id');
      this.noticiaServ.getNoticiaById(id).subscribe(data=>{
        this.noticia = data;
        console.log(data);
      });
    })
  }

  atualizar(noticiaObj){
    this.navCtrl.navigateForward(['noticias-update',noticiaObj.id]);
  }

  excluir(noticiaObj){
    this.navCtrl.navigateForward(['noticias-delete',noticiaObj.id]);
  }

  
}
  