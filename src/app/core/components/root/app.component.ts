import { Component , ViewChild} from '@angular/core';
import {HeaderComponent} from '../../components/common/header/header.component';
import { PersistenceService } from '../../../core/services/persistence.service';
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
  @ViewChild(HeaderComponent) headercmp: HeaderComponent;
  constructor(private _router : Router, public loaderService : LoaderService , private _persistenceService: PersistenceService)
  {
    this._router.events.subscribe((event: Event) => {
      if(_router.url.includes('gallery') )
      {
        this.showHeader = true;
      }
      else{
        this.showHeader = false;
      }
    });
  }
  logOutFromApp()
  {
    this._persistenceService.removeFromStorage('TOKEN');
    this._router.navigate(['/auth/login']);
  }
  // hasLoginUrl(): boolean{
  //   return this.router.includes('/login');
  // }
}
