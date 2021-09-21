import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExampleComponentsModule } from "./FirstComponents/example-components.module";
import { PipesModule } from "./Pipes/pipes.module";
// import {LOCALE_ID} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleComponentsModule,
    PipesModule
  ],
  providers: [],
  // providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
