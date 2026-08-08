import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-proveedor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-proveedor.html'
})
export class ListarProveedorComponent implements OnInit {
  
  proveedores: any[] = [];
  showAlert: boolean = true;
  alertMessage: string = 'Módulo de proveedores cargado correctamente.';

  constructor() {}

  ngOnInit(): void {
    // Recuperamos los proveedores guardados en el almacenamiento local o simulamos datos iniciales
    const datosGuardados = localStorage.getItem('lista_proveedores');
    if (datosGuardados) {
      this.proveedores = JSON.parse(datosGuardados);
    } else {
      this.proveedores = [
        { codigo_proveedor: 1, nombre_proveedor: 'Distribuciones del Cauca', telefono: '8321122', direccion: 'Carrera 4 # 2-15' },
        { codigo_proveedor: 2, nombre_proveedor: 'Comercializadora Global', telefono: '8234455', direccion: 'Calle 8 # 12-40' }
      ];
      localStorage.setItem('lista_proveedores', JSON.stringify(this.proveedores));
    }
  }

  eliminarProveedor(codigo: number) {
    if (confirm('¿Estás segura de que deseas eliminar este proveedor?')) {
      this.proveedores = this.proveedores.filter(p => p.codigo_proveedor !== codigo);
      localStorage.setItem('lista_proveedores', JSON.stringify(this.proveedores));
      this.alertMessage = 'Proveedor eliminado con éxito.';
      this.showAlert = true;
    }
  }

  cerrarAlerta() {
    this.showAlert = false;
  }
}