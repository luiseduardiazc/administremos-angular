// Modulos
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../components/components.module'

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component'
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagoshistoricosComponent } from './pagoshistoricos/pagoshistoricos.component';
import { PazysalvoComponent } from './pazysalvo/pazysalvo.component';
import { ValidacionPagosComponent } from './validacion-pagos/validacion-pagos.component'
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DashboardComponent,
    MainDashboardComponent,
    PagosComponent,
    PagoshistoricosComponent,
    PazysalvoComponent,
    ValidacionPagosComponent
  ],
  imports: [
            CommonModule,
            FormsModule,
            SharedModule,
            RouterModule,
            ComponentsModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatCheckboxModule
          ],
  exports: [
    DashboardComponent,
    MainDashboardComponent,
    PagosComponent,
    PagoshistoricosComponent,
    PazysalvoComponent,
    ValidacionPagosComponent
  ]
})
export class PagesModule {}
