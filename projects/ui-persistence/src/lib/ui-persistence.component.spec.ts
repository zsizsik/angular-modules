import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPersistenceComponent } from './ui-persistence.component';

describe('UiPersistenceComponent', () => {
  let component: UiPersistenceComponent;
  let fixture: ComponentFixture<UiPersistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPersistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPersistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
