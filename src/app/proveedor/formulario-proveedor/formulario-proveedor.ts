import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-proveedor.html',
  styleUrl: './formulario-proveedor.css'
})
export class FormularioProveedorComponent {
  // Variables para capturar los datos del formulario
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private router: Router) {}

  guardarProveedor() {
    // Aquí puedes ver los datos en la consola del navegador (F12 -> Console)
    console.log('Guardando proveedor:', {
      nombre: this.nombre,
      telefono: this.telefono,
      direccion: this.direccion
    });

    // Redirigir de vuelta al listado después de guardar
    this.router.navigate(['/proveedores']);
  }
}