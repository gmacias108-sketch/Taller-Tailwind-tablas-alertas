import { Routes } from '@angular/router';

// Factura
import { Formulariofactura } from './Factura/formulariofactura/formulariofactura';
import { Listarfactura } from './Factura/listarfactura/listarfactura';
import { Actualizarfactura } from './Factura/actualizarfactura/actualizarfactura';

// Producto
import { Formulario } from './producto/formularioproducto/formularioproducto';
import { Listar } from './producto/listarproducto/listarproducto';
import { Actualizar } from './producto/actualizarproducto/actualizarproducto';

// Proveedores
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor';
import { FormularioProveedorComponent } from './proveedor/formulario-proveedor/formulario-proveedor';
import { ActualizarProveedorComponent } from './proveedor/actualizar-proveedor/actualizar-proveedor';

// Cliente
import { FormularioCliente } from './cliente/formulariocliente/formulariocliente';
import { ActualizarCliente } from './cliente/actualizarcliente/actualizarcliente';
import { ListarCliente } from './cliente/listarcliente/listarcliente';

export const routes: Routes = [
  { path: '', component: Formulariofactura },
  { path: 'listarfactura', component: Listarfactura },
  { path: 'actualizarfactura/:id', component: Actualizarfactura },

  { path: 'productos', component: Listar },
  { path: 'productos/crear', component: Formulario },
  { path: 'productos/actualizar/:codigo', component: Actualizar },

  { path: 'proveedores', component: ListarProveedorComponent },
  { path: 'proveedores/crear', component: FormularioProveedorComponent },
  { path: 'proveedores/actualizar/:id', component: ActualizarProveedorComponent },

  { path: 'formulariocliente', component: FormularioCliente },
  { path: 'actualizarcliente/:id', component: ActualizarCliente },
  { path: 'listarcliente', component: ListarCliente }
];