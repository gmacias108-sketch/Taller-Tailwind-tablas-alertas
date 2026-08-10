import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarproducto } from './listarproducto';

describe('Listarproducto', () => {
  let component: Listarproducto;
  let fixture: ComponentFixture<Listarproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Listarproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
