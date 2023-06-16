import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from 'src/modules/card-module/card-interceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { LoginModule } from 'src/modules/login-module/login.module';

@NgModule({
  declarations: [AppComponent, ComponentHomeComponent, ComponentMenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
