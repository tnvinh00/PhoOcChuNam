/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { LazyloadService } from './lazyload.service';

describe('Service: Lazyload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyloadService]
    });
  });

  it('should ...', inject([LazyloadService], (service: LazyloadService) => {
    expect(service).toBeTruthy();
  }));
});
