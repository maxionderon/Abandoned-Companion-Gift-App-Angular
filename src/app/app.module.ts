import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionsComponent } from './components/companions/companions.component';
import { CompanionComponent } from './components/companion/companion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CompanionsComponent,
    CompanionComponent,
    ToolBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
