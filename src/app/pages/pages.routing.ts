import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagoshistoricosComponent } from './pagoshistoricos/pagoshistoricos.component';
import { PazysalvoComponent } from './pazysalvo/pazysalvo.component';
import { ValidacionPagosComponent } from './validacion-pagos/validacion-pagos.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: MainDashboardComponent,
        children: [
          { path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
          {path: 'pagos', component: PagosComponent, data: {title: 'Pagos'}},
          {path: 'pagos-historicos', component:PagoshistoricosComponent, data: {title: 'Pagos Historicos'}},
          {path: 'pazysalvo', component: PazysalvoComponent, data: {title: 'Paz y Salvo'}},
          {path: 'validacion-pagos', component: ValidacionPagosComponent, data: {title: 'Validacion de Pagos'}}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
