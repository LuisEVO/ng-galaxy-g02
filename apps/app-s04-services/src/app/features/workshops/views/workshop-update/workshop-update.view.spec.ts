import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopUpdateView } from './workshop-update.view';

describe('WorkshopUpdateView', () => {
  let component: WorkshopUpdateView;
  let fixture: ComponentFixture<WorkshopUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
