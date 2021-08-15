import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTemaryView } from './subject-temary.view';

describe('SubjectTemaryView', () => {
  let component: SubjectTemaryView;
  let fixture: ComponentFixture<SubjectTemaryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTemaryView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTemaryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
