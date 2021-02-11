import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemingService } from 'src/app/services/theming.service';
import { Option } from "../../models/option.model";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemingService) {}

  changeTheme(themeToSet) {
    this.themeChange.emit(themeToSet);
  }

  ngOnInit() {}

}
