import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-proveedor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-proveedor.html',
  styleUrls: []
})
export class FormularioProveedorComponent {
  nuevoproveedor = {
    nombre: '',
    telefono: '',
    direccion: '',
    nit: ''
  };

  alertaVisible = false;
  mensajeAlerta = '';

  constructor(private http: HttpClient) {}

  guardarproveedor() {
    this.http.post(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedores',
      this.nuevoproveedor,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json',
          Prefer: 'return=representation'
        }
      }
    ).subscribe({
      next: () => {
        this.mensajeAlerta = '¡Proveedor guardado correctamente!';
        this.alertaVisible = true;
        // Limpiar formulario opcionalmente
        this.nuevoproveedor = { nombre: '', telefono: '', direccion: '', nit: '' };
        
        // Ocultar alerta a los 4 segundos
        setTimeout(() => { this.alertaVisible = false; }, 4000);
      },
      error: (err) => {
        console.error(err);
        this.mensajeAlerta = 'Error al guardar el proveedor.';
        this.alertaVisible = true;
      }
    });
  }
}