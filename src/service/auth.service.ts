import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from 'src/model/message';
import { JwtHelperService } from "@auth0/angular-jwt";
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient,public menuCtrl: MenuController) { }

  login(obj: any): Observable<any> {
    //console.log(this.formGroup.value);
    return this.http.post<Message>(environment.apiAuth,
      obj,
      {
        observe: 'response',
        responseType: 'json'
      })
  }
  
  getToken(): string {
    
    if (localStorage.getItem('token') !== null || localStorage.getItem('token') !== 'null') {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }


  removeToken() : void {
   localStorage.setItem('token' , null);
    
  }

  setToken(text: string) {
    localStorage.setItem('token', text);
  }

  isExp(): boolean {
      const decodedToken = new JwtHelperService().isTokenExpired(this.getToken());
      return decodedToken;
  }

  isLogg() {
   
    if(this.getToken()===null || this.getToken()==='null'){
      console.log('false');
      return false;
    }else{
      console.log('true');
      if(this.isExp()===true){
        return false;
      }else{
        return true;
      }
      
    }
   
   
  }

  getEmail() {
    if(this.getToken()===null || this.getToken()==='null'){
      return null;
    
    }else{
      const decodedToken = new JwtHelperService().decodeToken(this.getToken());
    return decodedToken.userId;
    }
  }

  getDataExp() {
    const expirationDate = new JwtHelperService().getTokenExpirationDate(this.getToken());
    return expirationDate;
  }

  //const decodedToken = helper.decodeToken(this.message.text); // Email
  //const expirationDate = helper.getTokenExpirationDate(this.message.text); // data criação
  // const isExpired = helper.isTokenExpired(this.message.text); if true -> expirou

}
