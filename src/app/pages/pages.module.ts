// Modulos
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../components/components.module'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core'
import { MatMomentDateModule } from '@angular/material-moment-adapter'

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
            ReactiveFormsModule,
            SharedModule,
            RouterModule,
            ComponentsModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatNativeDateModule, 
            MatMomentDateModule
          ],
  exports: [
    DashboardComponent,
    MainDashboardComponent,
    PagosComponent,
    PagoshistoricosComponent,
    PazysalvoComponent,
    ValidacionPagosComponent
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class PagesModule {}
