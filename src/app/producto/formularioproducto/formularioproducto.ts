import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioproducto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formularioproducto.html' // ARREGLADO
})
export class Formulario {

  nuevoProducto = {
    codigo: 0,
    descripcion: '',
    proveedor: '',
    precioCosto: 0,
    precioVenta: 0,
    foto: ''
  };

  constructor(private router: Router) {}

  async guardarProducto() {
    if(!this.nuevoProducto.descripcion ||!this.nuevoProducto.proveedor){
      Swal.fire('Error', 'Completa todos los campos obligatorios', 'error');
      return;
    }
    console.log(this.nuevoProducto);
    await Swal.fire('Éxito', 'Producto guardado correctamente', 'success');
    this.router.navigate(['/productos']);
  }
}