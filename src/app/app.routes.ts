import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { Listar } from './listar/listar';
import { Actualizar } from './actualizar/actualizar';

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
  }

];