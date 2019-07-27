import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MondeasService } from './modenas/mondea.service';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MondeasService
  ],
  declarations: []
})
export class ServiceModule { }