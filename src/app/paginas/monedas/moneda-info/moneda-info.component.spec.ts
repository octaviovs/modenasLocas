import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaInfoComponent } from './moneda-info.component';

describe('MonedaInfoComponent', () => {
  let component: MonedaInfoComponent;
  let fixture: ComponentFixture<MonedaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
