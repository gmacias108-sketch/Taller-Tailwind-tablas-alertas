import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProveedorComponent } from './actualizar-proveedor';

describe('ActualizarProveedor', () => {
  let component: ActualizarProveedorComponent;
  let fixture: ComponentFixture<ActualizarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarProveedorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarProveedorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
