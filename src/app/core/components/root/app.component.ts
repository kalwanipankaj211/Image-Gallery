import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '5d-solutions-app';
  router: any;
  constructor(private _router : Router, public loaderService : LoaderService)
  {
    this.router = _router.url;
  }
  hasLoginUrl(): boolean{
    return this.router.includes('/login');
  }
}
