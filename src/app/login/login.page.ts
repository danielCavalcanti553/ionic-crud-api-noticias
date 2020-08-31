import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/service/auth.service';
import { Router } from '@angular/router';
import { Message } from 'src/model/message';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  //login : Login;
  formGroup : FormGroup;
  message : any;
  msg : string = null;

  constructor(private formBuilder : FormBuilder, 
    private auth : AuthService,
    private router : Router,
    public menuCtrl: MenuController,
    private navCtrl : NavController) {
    this.iniciarForm();
  }

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      username : ['',[Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }

  tryRegister(){

    let d = this.auth.login(this.formGroup.value).subscribe(data=>{
      //console.log(data.body.message.code);
      this.message = data.body.message;
      console.log(this.message);
      if(this.message.code == 200){
        
       this.auth.setToken(this.message.text);
          console.log('login válido ' + this.message.text);
          this.menuCtrl.enable(true);
          
          this.navCtrl.navigateRoot(['noticias-list']);
      }else{
        this.msg = "login invalido";
      }
    });
  }
}


