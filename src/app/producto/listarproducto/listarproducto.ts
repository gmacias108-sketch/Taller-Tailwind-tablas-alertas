import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarproducto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listarproducto.html' // ARREGLADO
})
export class Listar {

  productos = [
    {codigo: 1, descripcion: 'Ejemplo', proveedor: 'Proveedor 1', precioCosto: 10, precioVenta: 15, foto: 'foto.jpg'}
  ];

  constructor(private router: Router){}

  editarProducto(producto: any) {
    this.router.navigate(['/productos/actualizar', producto.codigo]);
  }

  async eliminarProducto(codigo: number) {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    });

    if(result.isConfirmed){
      this.productos = this.productos.filter(p => p.codigo!== codigo);
      Swal.fire('Eliminado', 'El producto fue eliminado', 'success');
    }
  }
}