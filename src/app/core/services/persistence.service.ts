import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private CACHE_PREFIX = '5d-solutions';


  constructor() { }


  setInStorage(key, value) {
    sessionStorage.setItem(this.CACHE_PREFIX + '.' + key, JSON.stringify(value));
  }

  getFromStorage(key) {
    if (sessionStorage.getItem(this.CACHE_PREFIX + '.' + key)) {
      return JSON.parse(sessionStorage.getItem(this.CACHE_PREFIX + '.' + key));
    } else {
      return null;
    }
  }

  removeFromStorage(key) {
    return sessionStorage.removeItem(this.CACHE_PREFIX + '.' + key);
  }

}
