/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FacebookService } from './facebook.service';

describe('Service: Facebook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookService]
    });
  });

  it('should ...', inject([FacebookService], (service: FacebookService) => {
    expect(service).toBeTruthy();
  }));
});
