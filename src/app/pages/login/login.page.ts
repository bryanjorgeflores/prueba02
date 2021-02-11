import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private nav: NavController,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      c_usuario: [
        "",
        Validators.compose([
          Validators.pattern("[0-9]{8}"),
          Validators.required
        ])
      ],
      c_password: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  onSubmit(){
    this.nav.navigateForward('dashboard')
  }

}
