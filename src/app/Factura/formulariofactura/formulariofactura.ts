import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulariofactura',
  imports: [CommonModule,FormsModule],
  templateUrl: './formulariofactura.html',
})
export class Formulariofactura {
   nuevaFactura={
    no_factura:'',
    fecha: '',
    cod_cliente:'',
    total_factura:''

  }

  constructor(private http:HttpClient){}


  guardarfactura(){
    this.http.post("https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura",
       this.nuevaFactura,
      {
        headers:{
          apikey:"sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          Authorization:"Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
          'Content-Type':'application/json'
        }
      }).subscribe({
        next:(respuesta)=>{
          alert("factura guardada correctamente"+respuesta)
        }
      })
  }
}
