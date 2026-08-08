import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarcliente } from './listarcliente';

describe('Listarcliente', () => {
  let component: Listarcliente;
  let fixture: ComponentFixture<Listarcliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarcliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listarcliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
