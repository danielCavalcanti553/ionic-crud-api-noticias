import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/model/noticia';
import { NOTICIAS } from 'src/environments/mock-list-noticias';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { NoticiaService } from 'src/service/noticia.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.page.html',
  styleUrls: ['./noticias-list.page.scss'],
})
export class NoticiasListPage implements OnInit {

  public noticias : Noticia[] = [];
  
  loading = this.loadingCtrl.create({
    cssClass: 'my-custom-class',
    message: 'Carregando...',
    duration: 2000
  });

  constructor(
    private navCtrl : NavController,
    private noticiaServ : NoticiaService,
    public loadingCtrl: LoadingController) {

  }

  ngOnInit(){
  }

  ionViewWillEnter(){
    
    this.noticias = [];

    this.loading.then(load=>{
      
      load.present();
      
      this.noticiaServ.getNoticias().subscribe(data=>{
        this.noticias = data;
        load.dismiss();
      });
      
    })
  }

  detalheNoticia(noticiaObj : Noticia){
    this.navCtrl.navigateForward(['noticias-detalhe',noticiaObj.id]);
  }

}
