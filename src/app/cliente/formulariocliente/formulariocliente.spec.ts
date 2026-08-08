import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariocliente } from './formulariocliente';

describe('Formulariocliente', () => {
  let component: Formulariocliente;
  let fixture: ComponentFixture<Formulariocliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulariocliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulariocliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
