import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Option } from '../models/option.model';
import { StyleManagerService } from './style.manager';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  fontSize = new Subject<any>();
  fontFamily = new Subject<any>();
  constructor(
    private styleManager: StyleManagerService,
    private http: HttpClient) {

  }
  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("assets/themes.json");
  }
  setTheme(themeToSet) {
    this.styleManager.setStyle(
      "theme",
      `assets/prebuilt-themes/${themeToSet}.css`
    );
  }

  putFontSize(data: any) {
    this.fontSize.next(data);
  }
  getFontSize(): Subject<any> {
    return this.fontSize;
  }
  putFontFamily(data: any) {
    this.fontFamily.next(data);
  }
  getFontFamily(): Subject<any> {
    return this.fontFamily;
  }
}
