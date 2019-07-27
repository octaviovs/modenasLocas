import { TestBed } from '@angular/core/testing';

import { MondeasService } from './mondea.service';

describe('MondeasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MondeasService = TestBed.get(MondeasService);
    expect(service).toBeTruthy();
  });
});
