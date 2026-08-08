import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizarfactura } from './actualizarfactura';

describe('Actualizarfactura', () => {
  let component: Actualizarfactura;
  let fixture: ComponentFixture<Actualizarfactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizarfactura],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarfactura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
