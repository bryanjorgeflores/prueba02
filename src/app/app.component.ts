import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedIndex = 0;
  items = [
    {
      title: 'Inicio',
      url: 'dashboard',
      icon: 'home-outline'
    },
    {
      title: 'Mi Perfil',
      url: 'profile',
      icon: 'person-outline'
    }
  ];
  constructor() {}
}
