import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar.html'
})
export class Actualizar {

  producto = {
    codigo: 0,
    descripcion: '',
    proveedor: '',
    precioCosto: 0,
    precioVenta: 0,
    foto: ''
  };

  actualizarProducto(){
    console.log(this.producto);
  }

}