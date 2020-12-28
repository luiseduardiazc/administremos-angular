import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagoshistoricosComponent } from './pagoshistoricos/pagoshistoricos.component';
import { PazysalvoComponent } from './pazysalvo/pazysalvo.component';
import { ValidacionPagosComponent } from './validacion-pagos/validacion-pagos.component';
import { PagosgeneralesComponent } from './pagosgenerales/pagosgenerales.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: MainDashboardComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
          {path: 'pagos', component: PagosComponent, data: {title: 'Pagos'}},
          {path: 'pagos-historicos', component:PagoshistoricosComponent, data: {title: 'Pagos Historicos'}},
          {path: 'pazysalvo', component: PazysalvoComponent, data: {title: 'Paz y Salvo'}},
          {path: 'validacion-pagos', component: ValidacionPagosComponent, data: {title: 'Validacion de Pagos'}},
          {path: 'pagos-generales', component: PagosgeneralesComponent, data: {title: 'Pagos Generales'}},
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
