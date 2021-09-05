import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbigeoView } from './ubigeo.view';

describe('UbigeoView', () => {
  let component: UbigeoView;
  let fixture: ComponentFixture<UbigeoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbigeoView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbigeoView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
