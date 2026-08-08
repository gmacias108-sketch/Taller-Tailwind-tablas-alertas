import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  imports: [FormsModule],
  templateUrl: './actualizar-cliente.html',
  styleUrl: './actualizar-cliente.css',
})
export class ActualizarCliente {
  id:number=0
  cliente={
    cod_cliente:0,
    nit:"",
    nombre:"",
    telefono:"",
    direccion:""
  }
  constructor(private http:HttpClient,
              private router:Router,
              private route:ActivatedRoute
  ){}
  ngOnInit(){
    this.id=this.route.snapshot.params['id']
  }
  actualizarCliente(){
    this.http.patch(
      `https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq.${this.id}`,
      this.cliente,
      {
        headers: {
          apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: (respuesta) => {
        alert('Cliente actualizado: ' + respuesta);
        this.router.navigate(['/listarcliente']);
      }
    });
  }
}
