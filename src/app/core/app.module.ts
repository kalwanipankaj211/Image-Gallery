import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AuthModule} from '../auth/auth.module';
import {ToastyModule} from 'ng2-toasty';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../core/components/root/app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {NotificationService} from './services/notification.service';
import { LayoutModule } from '@angular/cdk/layout';
import { PersistenceService } from './services/persistence.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MyAppInterceptorService} from './interceptors/my-app-interceptor.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { onAppInit } from './app.init';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastyModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true
    },
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAppInterceptorService,
      multi: true
    },
    TranslateService,
    NotificationService
  ]
})
export class AppModule { }


