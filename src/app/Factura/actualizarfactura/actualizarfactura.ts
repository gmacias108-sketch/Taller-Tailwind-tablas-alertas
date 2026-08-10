import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizarfactura',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './actualizarfactura.html',
})
export class Actualizarfactura {
  id: number = 0;
  factura: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.cargarFactura();
  }

  cargarFactura() {
    this.http.get<any[]>(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura?id=eq.${this.id}`,
      { headers: { apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x", Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x" } }
    ).subscribe({
      next: (res) => {
        if(res.length > 0) {
          this.factura = res[0];
          this.factura.fecha = this.factura.fecha.split('T')[0]; // Arreglo para el input date
        } else {
          Swal.fire('Error', 'Factura no encontrada', 'error');
          this.router.navigate(['/listarfactura']);
        }
      },
      error: () => Swal.fire('Error', 'No se pudo cargar la factura', 'error')
    });
  }

  actualizarFactura() {
    this.http.patch(`https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura?id=eq.${this.id}`, this.factura,
      { headers: { apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x", Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x", 'Content-Type': 'application/json', 'Prefer': 'return=representation' } }
    ).subscribe({
      next: () => { Swal.fire('¡Actualizado!', 'Factura actualizada correctamente', 'success'); this.router.navigate(['/listarfactura']); },
      error: () => Swal.fire('Error', 'No se pudo actualizar la factura', 'error')
    });
  }
}