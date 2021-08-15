import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectView } from './subject.view';

describe('SubjectView', () => {
  let component: SubjectView;
  let fixture: ComponentFixture<SubjectView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
