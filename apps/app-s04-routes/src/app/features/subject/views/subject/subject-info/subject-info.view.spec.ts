import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoView } from './subject-info.view';

describe('SubjectInfoView', () => {
  let component: SubjectInfoView;
  let fixture: ComponentFixture<SubjectInfoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInfoView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
