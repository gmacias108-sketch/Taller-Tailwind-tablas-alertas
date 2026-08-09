import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // 1. Agregado HttpClientModule
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-cliente',
  imports: [FormsModule, HttpClientModule], // 2. Agregado aquí
  templateUrl: './formulariocliente.html'
})
export class FormularioCliente {

  nuevocliente = {
    nit: '',
    nombre: '',
    telefono: '',
    direccion: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  guardarcliente() {
    // 3. Validación
    if(!this.nuevocliente.nombre || !this.nuevocliente.nit){
      Swal.fire('Campos obligatorios', 'Nombre y NIT son requeridos', 'warning');
      return;
    }

    this.http.post(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente',
      this.nuevocliente,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        }
      }
    ).subscribe({
      next: () => {
        Swal.fire({
          title: '¡Cliente creado!',
          text: 'El cliente se guardó correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          },
          buttonsStyling: false
        });
        this.router.navigate(['/listarcliente']);
      },
      error: () => {
        Swal.fire('Error', 'No se pudo guardar el cliente', 'error');
      }
    });
  }
}