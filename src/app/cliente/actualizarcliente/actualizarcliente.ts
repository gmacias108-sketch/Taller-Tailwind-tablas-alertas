import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  imports: [FormsModule], 
  templateUrl: './actualizarcliente.html',
})
export class ActualizarCliente {

  id: number = 0;

  cliente = {
    cod_cliente: 0,
    nit: '',
    nombre: '',
    telefono: '',
    direccion: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    this.cargarCliente();
  }

  cargarCliente() {
    this.http.get<any[]>(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq.${this.id}`,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: (respuesta) => {
        this.cliente = respuesta[0];
      },
      error: () => {
        Swal.fire('Error', 'No se pudo cargar el cliente', 'error');
      }
    });
  }

  actualizarCliente() {
  if (!this.cliente.nombre || !this.cliente.nit) {
    Swal.fire('Campos obligatorios', 'Nombre y NIT son requeridos', 'warning');
    return;
  }

  const datosCliente = {
    nit: this.cliente.nit,
    nombre: this.cliente.nombre,
    telefono: this.cliente.telefono,
    direccion: this.cliente.direccion
  };

  this.http.patch(
    `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq.${this.id}`,
    datosCliente,
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
        title: '¡Actualizado!',
        text: 'Los datos del cliente se actualizaron',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });

      this.router.navigate(['/listarcliente']);
    },
    error: (error) => {
      console.error('Error al actualizar:', error);

      Swal.fire(
        'Error',
        'No se pudo actualizar el cliente',
        'error'
      );
    }
  });
  }
}