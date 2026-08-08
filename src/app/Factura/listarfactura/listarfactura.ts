import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Factura {
id: number;
no_factura: string;
fecha: string;
cod_cliente: string;
total_factura: string;
}

@Component({
selector: 'app-listarfactura',
imports: [CommonModule],
templateUrl: './listarfactura.html',
})

export class Listarfactura {

facturas: Factura[] = [];

constructor(
private http: HttpClient,
private cdr: ChangeDetectorRef,
private router: Router
) {}

ngOnInit() {
this.traerFacturas();
}

traerFacturas() {
this.http.get<Factura[]>(
"https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura",
{
headers: {
apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
'Content-Type': 'application/json'
}
}
)
.subscribe({
next: (respuesta) => {
console.log(respuesta);
this.facturas = respuesta;
this.cdr.detectChanges();
}
});
}

eliminarFactura(id: number) {
this.http.delete(
"https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura?id=eq." + id,
{
headers: {
apikey: 'sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
Authorization: 'Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x',
'Content-Type': 'application/json'
}
}
)
.subscribe({
next: (respuesta) => {
alert("Registro eliminado " + respuesta + " id " + id);
this.traerFacturas();
this.cdr.detectChanges();
}
});
}

llevarActualizar(id: number) {
this.router.navigate(['/actualizarfactura', id]);
}
}