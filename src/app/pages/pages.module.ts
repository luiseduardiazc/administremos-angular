import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Grafica1Component } from './grafica1/grafica1.component'
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent
  ]
})
export class PagesModule {}
