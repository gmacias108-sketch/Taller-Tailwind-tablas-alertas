import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Listar } from './listar/listar';
import { Actualizar } from './actualizar/actualizar';
import { Formulariofactura } from './Factura/formulariofactura/formulariofactura';
import { Listarfactura } from './Factura/listarfactura/listarfactura';
import { Actualizarfactura } from './Factura/actualizarfactura/actualizarfactura';


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
  }

  

];