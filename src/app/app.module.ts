import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
