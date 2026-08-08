import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarfactura } from './listarfactura';

describe('Listarfactura', () => {
  let component: Listarfactura;
  let fixture: ComponentFixture<Listarfactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarfactura],
    }).compileComponents();

    fixture = TestBed.createComponent(Listarfactura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
