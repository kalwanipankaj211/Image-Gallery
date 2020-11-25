import { TestBed } from '@angular/core/testing';

import { MyAppInterceptorService } from './my-app-interceptor.service';

describe('MyAppInterceptorService', () => {
  let service: MyAppInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
