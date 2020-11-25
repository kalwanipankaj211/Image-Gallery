import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'auth/sign-up', pathMatch: 'full' },

  //below code is for loading module as lazily loaded and in auth routing module we need to use .forChild instead of forChild thus auth module becomes child of app module // as we did in dashboard
  // {path:'',loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  // {path: 'dashboard', loadChildren:() => import('../dashboard/dashboard.module').then(m=> m.DashboardModule)}
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
