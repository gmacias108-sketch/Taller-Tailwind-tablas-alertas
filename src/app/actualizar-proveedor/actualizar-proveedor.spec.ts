import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProveedor } from './actualizar-proveedor';

describe('ActualizarProveedor', () => {
  let component: ActualizarProveedor;
  let fixture: ComponentFixture<ActualizarProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarProveedor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
