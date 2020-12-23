import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing/app-routing.module'

// modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PagesModule } from './pages/pages.module'
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component'
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
