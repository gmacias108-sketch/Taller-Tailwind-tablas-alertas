import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-proveedor.html'
})
export class ActualizarProveedorComponent implements OnInit {
  
  codigoId: any;
  nombre_proveedor: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.codigoId = Number(this.route.snapshot.paramMap.get('id'));
    const proveedores = JSON.parse(localStorage.getItem('lista_proveedores') || '[]');
    const proveedorEncontrado = proveedores.find((p: any) => p.codigo_proveedor === this.codigoId);

    if (proveedorEncontrado) {
      this.nombre_proveedor = proveedorEncontrado.nombre_proveedor;
      this.telefono = proveedorEncontrado.telefono;
      this.direccion = proveedorEncontrado.direccion;
    }
  }

  actualizarDatos() {
    let proveedores = JSON.parse(localStorage.getItem('lista_proveedores') || '[]');
    
    proveedores = proveedores.map((p: any) => {
      if (p.codigo_proveedor === this.codigoId) {
        return {
          codigo_proveedor: this.codigoId,
          nombre_proveedor: this.nombre_proveedor,
          telefono: this.telefono,
          direccion: this.direccion
        };
      }
      return p;
    });

    localStorage.setItem('lista_proveedores', JSON.stringify(proveedores));
    alert('¡Proveedor actualizado correctamente!');
    this.router.navigate(['/listar-proveedor']);
  }
}