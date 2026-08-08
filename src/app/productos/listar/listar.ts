import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar.html'
})
export class Listar {

  productos = [
    {
      codigo: 1,
      descripcion: 'Ejemplo',
      proveedor: 'Proveedor 1',
      precioCosto: 10,
      precioVenta: 15,
      foto: 'foto.jpg'
    }
  ];

  editarProducto(producto: any) {
    console.log('Editar:', producto);
  }

  eliminarProducto(codigo: number) {
    console.log('Eliminar código:', codigo);
  }

}