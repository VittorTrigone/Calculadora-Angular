import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraAngularComponent } from './calculadora-angular/calculadora-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
