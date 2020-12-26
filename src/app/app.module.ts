import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing/app-routing.module'

// modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PagesModule } from './pages/pages.module'
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component'
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorService } from './interceptors/interceptor.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule, NoopAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
