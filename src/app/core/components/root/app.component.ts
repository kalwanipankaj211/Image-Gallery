import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '5d-solutions-app';
  router: any;
  showHeader : boolean;
  constructor(private _router : Router, public loaderService : LoaderService)
  {
    this._router.events.subscribe((event: Event) => {
      if(_router.url.includes('gallery') )
        this.showHeader = false;
    });
  }
  hasLoginUrl(): boolean{
    return this.router.includes('/login');
  }
}
