import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableFileComponent } from './draggable-file.component';

describe('DraggableFileComponent', () => {
  let component: DraggableFileComponent;
  let fixture: ComponentFixture<DraggableFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
