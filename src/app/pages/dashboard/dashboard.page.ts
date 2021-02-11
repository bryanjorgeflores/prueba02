import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Option } from 'src/app/models/option.model';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  destacados = [
    {
      nombre: 'Oro',
      tec: 'AAA',
      size: '900'
    },
    {
      nombre: 'Platino',
      tec: 'BBB',
      size: '1600'
    },
    {
      nombre: 'Diamante',
      tec: 'CCC',
      size: '1200'
    },
    {
      nombre: 'Carbón',
      tec: 'AAA',
      size: '1000'
    },
    {
      nombre: 'Grafito',
      tec: 'BBB',
      size: '1100'
    },
    {
      nombre: 'Rubí',
      tec: 'CCC',
      size: '800'
    },
  ];

  @ViewChild('contentSize', { static: true }) contentSize: ElementRef;
  fontSize = 16;
  fontFamily = '';
  constructor(
    private readonly themeService: ThemingService,
    private nav: NavController,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.themeService.setTheme("indigo-pink");
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.themeService.getFontSize()
      .subscribe(res => {
        if (res) {
          this.fontSize = res;
        }
      });
    this.themeService.getFontFamily()
      .subscribe(res => {
        if (res) {
          this.fontFamily = res;
        }
      });
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  goTo(pagina) {
    this.nav.navigateForward(pagina);
  }

  toggleMenu() {
    this.menuCtrl.open();
  }

}
