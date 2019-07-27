import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaListaComponent } from './moneda-lista.component';

describe('MonedaListaComponent', () => {
  let component: MonedaListaComponent;
  let fixture: ComponentFixture<MonedaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
