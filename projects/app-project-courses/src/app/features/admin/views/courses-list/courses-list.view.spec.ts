import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListView } from './courses-list.view';

describe('CoursesListView', () => {
  let component: CoursesListView;
  let fixture: ComponentFixture<CoursesListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
