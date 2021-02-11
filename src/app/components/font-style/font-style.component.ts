import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'app-font-style',
  templateUrl: './font-style.component.html',
  styleUrls: ['./font-style.component.scss'],
})
export class FontStyleComponent implements OnInit {
  options = [
    {
      nombFuente: 'Tipo 1',
      cssClass: 'Geometria'
    },
    {
      nombFuente: 'Tipo 2',
      cssClass: 'Geometria-Medium'
    },
    {
      nombFuente: 'Tipo 3',
      cssClass: 'Geometria-Light'
    },
    {
      nombFuente: 'Tipo 4',
      cssClass: 'Geometria-Medium'
    },
    {
      nombFuente: 'Tipo 5',
      cssClass: 'Alegreya'
    },
    {
      nombFuente: 'Tipo 6',
      cssClass: 'Colus'
    },

  ]

  constructor(
    private themeService: ThemingService
  ) { }

  ngOnInit() {}

  changeFontStyle(family) {
    this.themeService.putFontFamily(family);
  }

}
