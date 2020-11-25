import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions;
  constructor(private http: HttpClient) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {
      headers: httpHeaders
    };
  }

  login(data) {
    return this.http.post(environment.apiURL + '/api/users/login', data, this.httpOptions)
      .pipe(map(response => {
        return response;
      }
    ));
  }
  signUp(data)
  {
    return this.http.post(environment.apiURL + '/api/users/register', data, this.httpOptions)
      .pipe(map(response => {
        return response;
      }
    ));
  }
}
