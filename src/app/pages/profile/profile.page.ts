import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  usuario = {
    tipoDoc: 'DNI',
    numDoc: 70242188,
    nombres: 'Bryan Jorge Flores',
    fechaNac: '05/08/1997',
    codCliente: '123456789',
    productosContratados: [
      {
        idProducto: 1,
        nombreProducto: 'Producto Asombroso',
        tecProducto: 'Tecnologia X'
      },
      {
        idProducto: 2,
        nombreProducto: 'Producto Extravagante',
        tecProducto: 'Tecnologia Y'
      },
      {
        idProducto: 3,
        nombreProducto: 'Producto Unico',
        tecProducto: 'Tecnologia Z'
      },
      {
        idProducto: 4,
        nombreProducto: 'Producto Ideal',
        tecProducto: 'Tecnologia A'
      }
    ]
  }
  documentos = [
    'DNI', 'CARNET DE EXTRANJERIA'
  ]
  constructor(
    private formBuilder: FormBuilder,
    private nav: NavController,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      tipoDoc: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      numDoc: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      codCliente: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      nombres: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      fechaNac: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  ionViewWillEnter(){
    this.profileForm.controls['tipoDoc'].setValue(this.usuario.tipoDoc);
    this.profileForm.controls['numDoc'].setValue(this.usuario.numDoc);
    this.profileForm.controls['codCliente'].setValue(this.usuario.codCliente);
    this.profileForm.controls['nombres'].setValue(this.usuario.nombres);
    this.profileForm.controls['fechaNac'].setValue(new Date(this.usuario.fechaNac));

  }

  onSubmit(){
    this.nav.navigateForward('dashboard')
  }

  toggleMenu(){
    this.menuCtrl.open();
  }

}
