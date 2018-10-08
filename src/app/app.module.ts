import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { CategoryButtonComponent } from './components/category-button/category-button.component';
import { CategoryButtonService } from './services/category-button.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLogInterceptor } from './services/http.interceptor';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ResponsiveColsDirective } from './directives/responsive-cols.directive';

@NgModule({
  declarations: [
    AppComponent,
    CategoryButtonComponent,
    ButtonComponent,
    ResponsiveColsDirective
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    CategoryButtonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLogInterceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
