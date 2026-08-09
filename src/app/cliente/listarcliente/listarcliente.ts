import { HttpClient, HttpClientModule } from '@angular/common/http'; // 1. Agregado HttpClientModule
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Cliente {
  cod_cliente: number;
  nit: string;
  nombre: string;
  telefono: string;
  direccion: string;
}

@Component({
  selector: 'app-listar-cliente',
  imports: [CommonModule, RouterLink, HttpClientModule], // 2. Agregado aquí
  templateUrl: './listarcliente.html',
})
export class ListarCliente {

  clientes: Cliente[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.traercliente();
  }

  traercliente() {
    this.http.get<Cliente[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente',
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: (respuesta) => {
        this.clientes = respuesta;
        this.cdr.detectChanges();
      },
      error: () => {
        Swal.fire('Error', 'No se pudieron cargar los clientes', 'error');
      }
    });
  }

  eliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
      confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2',
      cancelButton: 'bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(
          `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq.${id}`,
          {
            headers: {
              apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
              Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
              'Content-Type': 'application/json'
            }
          }
        ).subscribe({
          next: () => {
            Swal.fire('¡Eliminado!', 'El cliente fue eliminado.', 'success');
            this.traercliente();
          },
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar el cliente', 'error');
          }
        });
      }
    })
  }

  llevarActualizar(id: number) {
    this.router.navigate(['/actualizarcliente', id]);
  }
}