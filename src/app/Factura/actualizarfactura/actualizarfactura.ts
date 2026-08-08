import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
selector: 'app-actualizarfactura',
imports: [FormsModule],
templateUrl: './actualizarfactura.html',
})
export class Actualizarfactura {

id: number = 0;

factura = {
no_factura: '',
fecha: '',
cod_cliente: '',
total_factura: ''
};

constructor(
private http: HttpClient,
private router: Router,
private route: ActivatedRoute
) {}

ngOnInit() {
this.id = this.route.snapshot.params['id'];
}

actualizarFactura() {
this.http.patch(
"https://srrpeanqjqfxtnuwhjez.supabase.co/rest/v1/factura?id=eq." + this.id,
this.factura,
{
headers: {
apikey: "sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
Authorization: "Bearer sb_publishable_qnp1xzi89N_0c2Yex-wbwQ_ddmCG28x",
'Content-Type': 'application/json'
}
}
)
.subscribe({
next: (respuesta) => {
alert("Factura actualizada correctamente");
this.router.navigate(['/listarfactura']);
}
});
}
}
