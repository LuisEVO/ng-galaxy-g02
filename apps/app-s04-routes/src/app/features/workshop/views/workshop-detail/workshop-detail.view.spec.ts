import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetailView } from './workshop-detail.view';

describe('WorkshopDetailView', () => {
  let component: WorkshopDetailView;
  let fixture: ComponentFixture<WorkshopDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
