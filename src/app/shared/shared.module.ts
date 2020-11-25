import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from './app-material/app-material.module';

// Directives

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [AppMaterialModule]
})
export class SharedModule {
 }
