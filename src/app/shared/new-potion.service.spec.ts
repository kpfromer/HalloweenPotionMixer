import {inject, TestBed} from '@angular/core/testing';

import {NewPotionService} from './new-potion.service';

describe('NewPotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPotionService]
    });
  });

  it('should be created', inject([NewPotionService], (service: NewPotionService) => {
    expect(service).toBeTruthy();
  }));
});
