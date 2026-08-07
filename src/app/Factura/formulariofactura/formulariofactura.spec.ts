import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariofactura } from './formulariofactura';

describe('Formulariofactura', () => {
  let component: Formulariofactura;
  let fixture: ComponentFixture<Formulariofactura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulariofactura],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulariofactura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
