import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagoshistoricosComponent } from './pagoshistoricos/pagoshistoricos.component';
import { PazysalvoComponent } from './pazysalvo/pazysalvo.component';
import { ValidacionPagosComponent } from './validacion-pagos/validacion-pagos.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: MainDashboardComponent,
        children: [
          { path: '', component: DashboardComponent },
          {path: 'pagos', component: PagosComponent},
          {path: 'pagos-historicos', component:PagoshistoricosComponent},
          {path: 'pazysalvo', component: PazysalvoComponent},
          {path: 'validacion-pagos', component: ValidacionPagosComponent},
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafica1Component }
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
