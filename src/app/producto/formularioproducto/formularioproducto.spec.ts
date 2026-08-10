import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularioproducto } from './formularioproducto';

describe('Formularioproducto', () => {
  let component: Formularioproducto;
  let fixture: ComponentFixture<Formularioproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularioproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Formularioproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
