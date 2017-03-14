import { TestBed, inject } from '@angular/core/testing';

import { StyleService } from './style.service';

describe('StyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleService]
    });
  });

  it('should ...', inject([StyleService], (service: StyleService) => {
    expect(service).toBeTruthy();
  }));
});
