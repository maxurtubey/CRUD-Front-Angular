import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './estudios/agregar/agregar.component';
import { BorrarComponent } from './estudios/borrar/borrar.component';
import { EditarComponent } from './estudios/editar/editar.component';
import { ListarComponent } from './estudios/listar/listar.component';

const routes: Routes = [

  {path: 'listar', component:ListarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'editar/:id', component:EditarComponent},
  {path: 'borrar', component:BorrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
