import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { LoginComponent } from '../auth/login/login.component'
import { RegisterComponent } from '../auth/register/register.component'
import { ProgressComponent } from '../pages/progress/progress.component'
import { Grafica1Component } from '../pages/grafica1/grafica1.component'
import { NotpagefoundComponent } from '../pages/notpagefound/notpagefound.component'
import { MainDashboardComponent } from '../pages/main-dashboard/main-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotpagefoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
