import {inject, TestBed} from '@angular/core/testing';

import {MundanePotionService} from './mundane-potion.service';

describe('MundanePotionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MundanePotionService]
    });
  });

  it('should be created', inject([MundanePotionService], (service: MundanePotionService) => {
    expect(service).toBeTruthy();
  }));
});
