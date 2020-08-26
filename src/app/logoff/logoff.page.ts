import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage implements OnInit {

  constructor(private router : Router, private auth: AuthService,
    private navCtrl : NavController){}

  ngOnInit(): void {
    this.auth.removeToken();
    this.navCtrl.navigateRoot(['/login']);
  }

}
