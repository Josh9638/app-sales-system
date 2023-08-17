import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'administracion', component: AdministracionComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
