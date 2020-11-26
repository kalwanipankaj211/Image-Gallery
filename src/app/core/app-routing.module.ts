import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'auth/sign-up', pathMatch: 'full' },
  {path: 'gallery', loadChildren:() => import('../gallery/gallery.module').then(m=> m.GalleryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      enableTracing: false,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
