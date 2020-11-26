import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryComponent} from './_root/gallery.component';
import {AddImageComponent} from './component/add-image/add-image.component';
import {ListGalleryComponent} from './component/list-gallery/list-gallery.component';


const routes: Routes = [
  {
    path: '', component: GalleryComponent,
    children: [
      { path: '', redirectTo: 'gallery', pathMatch: 'full',  },
      { path: 'add-gallery', component: AddImageComponent },
      { path: 'list-gallery', component: ListGalleryComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
