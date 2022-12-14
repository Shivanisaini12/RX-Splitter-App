import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';



@NgModule({
  declarations: [
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
