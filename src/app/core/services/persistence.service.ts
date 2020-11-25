import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private CACHE_PREFIX = '5d-solutions';

  private KEYS: Object = {
    USER: 'USER',
    DOMAIN: 'DOMAIN',
    TOKEN: 'TOKEN'
  };

  constructor() { }

  setInSession(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  getFromSession(key) {
    return sessionStorage.getItem(key) !== null ? JSON.parse(sessionStorage.getItem(key)) : null;
  }

  removeFromSession(key) {
    sessionStorage.removeKey(key);
  }

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

  setUser(value) {
    this.setInStorage(this.KEYS['USER'], value);
  }

  getUser() {
    return this.getFromStorage(this.KEYS['USER']);
  }

  removeUser() {
    this.removeFromStorage(this.KEYS['USER']);
  }

  setDomain(value) {
    this.setInStorage(this.KEYS['DOMAIN'], value);
  }

  getDomain() {
    return this.getFromStorage(this.KEYS['DOMAIN']);
  }

  removeDomain() {
    this.removeFromStorage(this.KEYS['DOMAIN']);
  }

  setToken(value) {
    this.setInStorage(this.KEYS['TOKEN'], value);
  }

  getToken() {
    return this.getFromStorage(this.KEYS['TOKEN']);
  }

  removeToken() {
    return this.removeFromStorage(this.KEYS['TOKEN']);
  }

  removeAllFromStorage() {
    this.removeDomain();
    this.removeUser();
    this.removeToken();
  }
}
