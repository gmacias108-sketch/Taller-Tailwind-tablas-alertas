import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

interface Cliente{
  cod_cliente:number;
  nit:string;
  nombre:string;
  telefono:string;
  direccion:string
}
@Component({
  selector: 'app-listar-cliente',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-cliente.html',
  styleUrl: './listar-cliente.css',
})

export class ListarCliente {
  clientes:Cliente[]=[]
  constructor(private http:HttpClient, 
                private cdr:ChangeDetectorRef,
              private router:Router
              ){}
  ngOnInit(){
    this.traercliente()
  }
  
  traercliente(){
    this.http.get<Cliente[]>('https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente',{
      headers:{
      apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      'Content-Type':'application/json'
    }
    })
    .subscribe({
      next:(respuesta)=>{
        console.log(respuesta)
        this.clientes=respuesta
        this.cdr.detectChanges();
      }
    })
  }
  eliminar(id:number){
    this.http.delete("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/cliente?cod_cliente=eq."+id,
      {
        headers:{
      apikey:'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
      'Content-Type':'application/json'
    }
      }
    ).subscribe({
      next:(respuesta)=>{
        alert("Cliente eliminado"+ respuesta + "id" + id)
        this.traercliente()
        this.cdr.detectChanges();
      }
    })
    
  }
  llevarActualizar(id:number){
    this.router.navigate(['/actualizar-cliente',id]);
  }
}
