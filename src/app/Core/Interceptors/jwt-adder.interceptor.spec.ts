import { TestBed } from '@angular/core/testing';

import { JwtAdderInterceptor } from './jwt-adder.interceptor';

describe('JwtAdderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtAdderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtAdderInterceptor = TestBed.inject(JwtAdderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
