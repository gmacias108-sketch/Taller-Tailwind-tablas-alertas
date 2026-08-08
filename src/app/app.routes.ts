import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Listar } from './listar/listar';
import { Actualizar } from './actualizar/actualizar';
import { Formulariofactura } from './Factura/formulariofactura/formulariofactura';
import { Listarfactura } from './Factura/listarfactura/listarfactura';
import { Actualizarfactura } from './Factura/actualizarfactura/actualizarfactura';
// 1. Importa tus componentes de proveedores
import { ListarProveedorComponent } from './proveedor/listar-proveedor/listar-proveedor';
import { FormularioProveedorComponent } from './proveedor/formulario-proveedor/formulario-proveedor';
import { ActualizarProveedorComponent } from './proveedor/actualizar-proveedor/actualizar-proveedor';
// componentes de cliente
import { FormularioCliente } from './cliente/formulariocliente/formulariocliente';
import { ActualizarCliente } from './cliente/actualizarcliente/actualizarcliente';
import { ListarCliente } from './cliente/listarcliente/listarcliente';

export const routes: Routes = [

  {
    path: 'productos',
    component: Listar
  },

  {
    path: 'productos/crear',
    component: Formulario
  },

  {
    path: 'productos/actualizar',
    component: Actualizar
  },

  // 2. Añade las rutas de proveedores aquí mismo
  {
    path: 'proveedores',
    component: ListarProveedorComponent
  },

  {
    path: 'proveedores/crear',
    component: FormularioProveedorComponent
  },

  {
    path: 'proveedores/actualizar/:id',
    component: ActualizarProveedorComponent
  },

  {
    path: '',
    component: Formulariofactura
  },

  {
    path: 'listarfactura',
    component: Listarfactura
  },

  {
    path: 'actualizarfactura/:id',
    component: Actualizarfactura
  },
  {
    path:'formulariocliente',
    component:FormularioCliente
  },
  {
    path:'actualizarcliente/:id',
    component:ActualizarCliente
  },
  {
    path:'listarcliente',
    component:ListarCliente
  }

];