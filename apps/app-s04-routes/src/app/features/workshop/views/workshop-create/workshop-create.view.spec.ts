import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCreateView } from './workshop-create.view';

describe('WorkshopCreateView', () => {
  let component: WorkshopCreateView;
  let fixture: ComponentFixture<WorkshopCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
