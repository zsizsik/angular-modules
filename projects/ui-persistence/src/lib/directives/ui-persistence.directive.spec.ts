import { UIPersistenceDirective } from './ui-persistence.directive';
import { TestBed } from '@angular/core/testing';
import { UIPersistenceService } from '../services/ui-persistence.service';

describe('UIPersistenceDirective', () => {

  var persistenceService = null;
  beforeEach(() => { TestBed.configureTestingModule({}); persistenceService = TestBed.get(UIPersistenceService) });

  it('should create an instance', () => {
    const directive = new UIPersistenceDirective(persistenceService);
    expect(directive).toBeTruthy();
  });
});
