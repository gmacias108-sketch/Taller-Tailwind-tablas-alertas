import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-proveedor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-proveedor.html',
  styleUrls: []
})
export class ListarProveedorComponent implements OnInit {
  proveedores: any[] = [];
  alertaVisible = false;
  mensajeAlerta = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.http.get<any[]>(
      'https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedores?select=*',
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({
      next: (data) => {
        this.proveedores = data;
      },
      error: (err) => {
        console.error('Error al cargar proveedores', err);
        this.mensajeAlerta = 'Error al cargar los datos de la tabla.';
        this.alertaVisible = true;
      }
    });
  }

  eliminar(id: number) {
    if (confirm('¿Estás segura de eliminar este proveedor?')) {
      this.http.delete(
        `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedores?id=eq.${id}`,
        {
          headers: {
            apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
            Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
          }
        }
      ).subscribe({
        next: () => {
          this.mensajeAlerta = 'Proveedor eliminado correctamente.';
          this.alertaVisible = true;
          this.cargarProveedores(); // Recarga la tabla de inmediato
          setTimeout(() => { this.alertaVisible = false; }, 4000);
        },
        error: (err) => {
          console.error('Error al eliminar', err);
          this.mensajeAlerta = 'No se pudo eliminar el proveedor.';
          this.alertaVisible = true;
        }
      });
    }
  }
}