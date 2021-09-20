import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExampleComponentsModule } from "./FirstComponents/example-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
