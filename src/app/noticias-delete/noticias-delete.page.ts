import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/model/noticia';
import { NavController } from '@ionic/angular';
import { NoticiaService } from 'src/service/noticia.service';
import { Message } from 'src/model/message';

@Component({
  selector: 'app-noticias-delete',
  templateUrl: './noticias-delete.page.html',
  styleUrls: ['./noticias-delete.page.scss'],
})
export class NoticiasDeletePage implements OnInit {

  noticia : Noticia = new Noticia();
  msg : string = null;

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

  excluir(){
    this.noticiaServ.delete(this.noticia).subscribe(data=>{
      let reponse : Message = data;
      if(data.status===200){
        this.navCtrl.navigateRoot(['noticias-list'])
      }else{
        this.msg = "Houve um erro ao cadastrar";
      }
      
    });
  }

}
