import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// modules
import { PagesRoutingModule } from '../pages/pages.routing'
import { AuthRoutingModule } from '../auth/auth.router'

import { PageNotFoundComponent } from '../auth/page-not-found/page-not-found.component'
const routes: Routes = [{ path: '**', component: PageNotFoundComponent }]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
