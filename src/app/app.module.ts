import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionsComponent } from './components/companions/companions.component';
import { CompanionComponent } from './components/companion/companion.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanionsComponent,
    CompanionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
