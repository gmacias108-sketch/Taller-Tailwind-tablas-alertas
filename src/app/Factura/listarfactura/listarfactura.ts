import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Factura {
  id: number;
  no_factura: string;
  fecha: string;
  cod_cliente: number;
  total_factura: number;
}

@Component({
  selector: 'app-listarfactura',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './listarfactura.html',
})
export class Listarfactura {
  facturas: Factura[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.traerFacturas();
  }

  traerFacturas() {
    this.http.get<Factura[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura',
      { headers: { apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x' } }
    ).subscribe({
      next: (res) => this.facturas = res,
      error: () => Swal.fire('Error', 'No se pudieron cargar las facturas', 'error')
    });
  }

  eliminarFactura(id: number) {
    Swal.fire({ title: '¿Estás seguro?', text: "¡No podrás revertir esto!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Sí, eliminar' })
  .then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura?id=eq.${id}`,
          { headers: { apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x', Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x' } }
        ).subscribe({
          next: () => { Swal.fire('¡Eliminado!', '', 'success'); this.traerFacturas(); },
          error: () => Swal.fire('Error', 'No se pudo eliminar', 'error')
        });
      }
    })
  }
}