import { TestBed } from '@angular/core/testing';

import { UIPersistenceService } from './ui-persistence.service';

describe('UiPersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UIPersistenceService = TestBed.get(UIPersistenceService);
    expect(service).toBeTruthy();
  });
});
