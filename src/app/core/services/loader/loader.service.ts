import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}

// Inject this service into app component and give is loading property to mat sppiner
// since this is observable type variable we must add sync pipe there
