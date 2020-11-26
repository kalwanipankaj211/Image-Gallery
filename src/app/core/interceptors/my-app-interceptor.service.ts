import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {LoaderService} from '../services/loader/loader.service'
import {PersistenceService} from '../../core/services/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class MyAppInterceptorService  implements HttpInterceptor{

  constructor(public loaderService : LoaderService , public persistenceService : PersistenceService) { }
  intercept(req : HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>>{

    const token: string = this.persistenceService.getFromStorage('TOKEN');
    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }

    this.loaderService.isLoading.next(true);
    document.getElementById("solutionDiv").style.opacity = "0.5";
    return next.handle(req).pipe(
      finalize(
        () =>{
          document.getElementById("solutionDiv").style.opacity = "1";
          this.loaderService.isLoading.next(false);
        }
      )
    )
  }
}
