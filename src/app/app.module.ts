import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { HeaderComponent } from './shared/header/header.component'
import { ProgressComponent } from './pages/progress/progress.component'
import { Grafica1Component } from './pages/grafica1/grafica1.component'
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component'
import { FooterComponent } from './shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
