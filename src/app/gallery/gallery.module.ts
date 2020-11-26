import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './_root/gallery.component';
import { AddImageComponent } from './component/add-image/add-image.component';
import { ListGalleryComponent } from './component/list-gallery/list-gallery.component';
import {MyAppInterceptorService} from '../../app/core/interceptors/my-app-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [GalleryComponent, AddImageComponent, ListGalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAppInterceptorService,
      multi: true
    },
  ]
})
export class GalleryModule { }
