import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ThemeComponent } from './theme/theme.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FontComponent } from './font/font.component';
import { FontStyleComponent } from './font-style/font-style.component';

@NgModule({
  declarations: [ThemeComponent, FontComponent, FontStyleComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ThemeComponent, FontComponent, FontStyleComponent]
})
export class SharedComponentsModule { }
