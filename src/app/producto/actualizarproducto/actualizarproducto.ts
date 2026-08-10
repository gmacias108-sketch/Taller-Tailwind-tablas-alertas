import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizarproducto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizarproducto.html' // ARREGLADO
})
export class Actualizar implements OnInit {

  producto = {
    codigo: 0,
    descripcion: '',
    proveedor: '',
    precioCosto: 0,
    precioVenta: 0,
    foto: ''
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('codigo');
    console.log('Cargar producto:', id);
  }

  async actualizarProducto(){
    console.log(this.producto);
    await Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success');
    this.router.navigate(['/productos']);
  }
}