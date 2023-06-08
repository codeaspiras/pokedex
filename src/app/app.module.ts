import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { HomeComponent } from './pages/home/home.component';
import { NumericButtonComponent } from './components/numeric-button/numeric-button.component';
import { NumericButtonGridComponent } from './components/numeric-button-grid/numeric-button-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    HomeComponent,
    NumericButtonComponent,
    NumericButtonGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
