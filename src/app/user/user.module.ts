import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TobBarComponent } from './tob-bar/tob-bar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';



@NgModule({
  declarations: [
    TobBarComponent,
    TopbarComponent,
    HeaderComponent,
    FooterComponent,
    LeftbarComponent,
    RightbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
