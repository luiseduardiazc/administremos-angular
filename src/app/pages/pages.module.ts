// Modulos
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../components/components.module'

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Grafica1Component } from './grafica1/grafica1.component'
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagoshistoricosComponent } from './pagoshistoricos/pagoshistoricos.component';
import { PazysalvoComponent } from './pazysalvo/pazysalvo.component';
import { ValidacionPagosComponent } from './validacion-pagos/validacion-pagos.component'


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    PagosComponent,
    PagoshistoricosComponent,
    PazysalvoComponent,
    ValidacionPagosComponent
  ],
  imports: [
            CommonModule,
            SharedModule,
            RouterModule,
            ComponentsModule
          ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    PagosComponent,
    PagoshistoricosComponent,
    PazysalvoComponent,
    ValidacionPagosComponent
  ]
})
export class PagesModule {}
