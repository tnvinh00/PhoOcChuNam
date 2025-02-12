/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FoodService } from './food.service';

describe('Service: Food', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodService]
    });
  });

  it('should ...', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));
});
