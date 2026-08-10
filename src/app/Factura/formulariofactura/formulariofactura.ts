import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulariofactura',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './formulariofactura.html',
})
export class Formulariofactura {
  nuevaFactura = {
    no_factura: '',
    fecha: '',
    cod_cliente: 0,
    total_factura: 0
  }

  constructor(private http: HttpClient, private router: Router) {}

  guardarfactura() {
    this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura",
      this.nuevaFactura,
      { headers: { apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x", Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x", 'Content-Type':'application/json' } }
    ).subscribe({
      next: () => {
        Swal.fire('¡Guardado!', 'Factura guardada correctamente', 'success');
        this.router.navigate(['/listarfactura']);
      },
      error: () => Swal.fire('Error', 'No se pudo guardar', 'error')
    })
  }
}