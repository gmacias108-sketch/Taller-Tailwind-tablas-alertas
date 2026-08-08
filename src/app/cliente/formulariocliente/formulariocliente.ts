import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-cliente.html',
  styleUrl: './formulario-cliente.css',
})
export class FormularioCliente {
  nuevocliente={
    nombre:'',
    telefono:'',
    direccion:'',
    nit:''
  }
  constructor(private http:HttpClient){}
  guardarcliente(){
    this.http.post('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente',
    this.nuevocliente,
    { 
      headers:{
      apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      'Content-Type':'application/json'
    }
    
    }).subscribe({
      next:(respuesta)=>{
        alert("Cliente guardado correctamente "+ respuesta)
      }
    })
  }
}
