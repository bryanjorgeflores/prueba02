import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theming.service';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class FontComponent implements OnInit {
  options = [8,10,12,16,24,32]
  constructor(private themeService: ThemingService) { }

  ngOnInit() {}
  changeFont(size) {
    this.themeService.putFontSize(size);
  }
}
