import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { ScrollToTopComponent } from './common/scroll-to-top/scroll-to-top.component';
import { CommonComponent } from './common/common.component';
import { HomeComponent } from './featured/home/home.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ContactUsComponent } from './featured/contact-us/contact-us.component';
import { JoinUsComponent } from './featured/join-us/join-us.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './http-intercepters/interceptor';
import { SpinnerComponent } from './core/spinner/spinner.component';
import * as $ from "jquery";
import { RejectConsentComponent } from './featured/reject-consent/reject-consent.component';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    FooterComponent,
    HeaderComponent,
    ScrollToTopComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    JoinUsComponent,
    SpinnerComponent,
    RejectConsentComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'diwanadvocates' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
