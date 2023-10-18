import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

// http://localhost:4200/productos
const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductoListComponent },
  { path: 'agregar-producto', component: AgregarProductoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
