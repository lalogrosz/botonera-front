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
import { CategoryButtonFormComponent } from './components/category-button/category-button-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonFormComponent } from './components/button/button-form.component';
import { ButtonService } from './services/button.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryButtonComponent,
    CategoryButtonFormComponent,
    ButtonComponent,
    ButtonFormComponent,
    ResponsiveColsDirective
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    CategoryButtonService,
    ButtonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLogInterceptor,
      multi: true
    },
  ],
  entryComponents: [CategoryButtonFormComponent, ButtonFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
