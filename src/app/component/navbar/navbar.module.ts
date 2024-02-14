import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../material/material/material.module";
import {NavbarComponent} from "./navbar.component";



@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class NavbarModule { }
