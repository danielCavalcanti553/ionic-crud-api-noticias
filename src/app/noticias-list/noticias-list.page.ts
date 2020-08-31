import { Component, OnInit, ViewChild } from '@angular/core';
import { Noticia } from 'src/model/noticia';
import { NOTICIAS } from 'src/environments/mock-list-noticias';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, IonInfiniteScroll } from '@ionic/angular';
import { NoticiaService } from 'src/service/noticia.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.page.html',
  styleUrls: ['./noticias-list.page.scss'],
})
export class NoticiasListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
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

  loadData(event) {

    this.noticiaServ.getNoticias().subscribe(data=>{
      data.forEach(item=>{
        this.noticias.push(item);
      })

      setTimeout(() => {
        console.log('Done');
        event.target.complete();
        if (data.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);

     
    });

   
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}
