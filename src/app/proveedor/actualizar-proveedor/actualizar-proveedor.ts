import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-proveedor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-proveedor.html',
  styleUrls: []
})
export class ActualizarProveedorComponent implements OnInit {
  proveedor = {
    nombre: '',
    telefono: '',
    direccion: '',
    nit: ''
  };

  idProveedor: any;
  alertaVisible = false;
  mensajeAlerta = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Captura el ID que viene por la URL (ej: /proveedores/actualizar?id=1 o similar)
    this.idProveedor = this.route.snapshot.queryParamMap.get('id');
    if (this.idProveedor) {
      this.cargarDatosProveedor();
    }
  }

  cargarDatosProveedor() {
    this.http.get<any[]>(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedores?id=eq.${this.idProveedor}&select=*`,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x'
        }
      }
    ).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.proveedor = data[0];
        }
      },
      error: (err) => {
        console.error('Error al cargar proveedor', err);
      }
    });
  }

  actualizarProveedor() {
    this.http.patch(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/proveedores?id=eq.${this.idProveedor}`,
      this.proveedor,
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
        this.mensajeAlerta = '¡Proveedor actualizado correctamente!';
        this.alertaVisible = true;
        
        // Redirige al listado después de 2 segundos para que se vea la alerta
        setTimeout(() => {
          this.router.navigate(['/proveedores']);
        }, 2000);
      },
      error: (err) => {
        console.error('Error al actualizar', err);
        this.mensajeAlerta = 'Error al actualizar el proveedor.';
        this.alertaVisible = true;
      }
    });
  }
}