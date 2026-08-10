import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html'
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

  guardarProducto() {
    console.log(this.nuevoProducto);
  }

}