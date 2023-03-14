import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    ComponentMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
