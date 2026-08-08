import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-proveedor.html'
})
export class FormularioProveedorComponent {
  
  nombre_proveedor: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private router: Router) {}

  guardarProveedor() {
    if (!this.nombre_proveedor || !this.telefono || !this.direccion) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const proveedoresActuales = JSON.parse(localStorage.getItem('lista_proveedores') || '[]');
    
    // Generar un código único autoincrementable
    const nuevoCodigo = proveedoresActuales.length > 0 ? Math.max(...proveedoresActuales.map((p: any) => p.codigo_proveedor)) + 1 : 1;

    const proveedorNuevo = {
      codigo_proveedor: nuevoCodigo,
      nombre_proveedor: this.nombre_proveedor,
      telefono: this.telefono,
      direccion: this.direccion
    };

    proveedoresActuales.push(proveedorNuevo);
    localStorage.setItem('lista_proveedores', JSON.stringify(proveedoresActuales));

    alert('¡Proveedor registrado con éxito!');
    this.router.navigate(['/listar-proveedor']);
  }
}