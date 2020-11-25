import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {LoaderService} from '../services/loader/loader.service'

@Injectable({
  providedIn: 'root'
})
export class MyAppInterceptorService  implements HttpInterceptor{

  constructor(public loaderService : LoaderService) { }
  intercept(req : HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>>{

    this.loaderService.isLoading.next(true);
    document.getElementById("solutinDiv").style.opacity = "0.5";
    return next.handle(req).pipe(
      finalize(
        () =>{
          document.getElementById("solutinDiv").style.opacity = "1";
          this.loaderService.isLoading.next(false);
        }
      )
    )
  }
}
