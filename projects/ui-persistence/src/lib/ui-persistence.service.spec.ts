import { TestBed } from '@angular/core/testing';

import { UiPersistenceService } from './ui-persistence.service';

describe('UiPersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiPersistenceService = TestBed.get(UiPersistenceService);
    expect(service).toBeTruthy();
  });
});
