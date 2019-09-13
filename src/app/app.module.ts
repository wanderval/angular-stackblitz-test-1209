import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FormComponent, ToUpperCasePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
