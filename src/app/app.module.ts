import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { TableFilteringComponent } from '../table/table-filtering.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TableFilteringComponent
  ],
  imports: [
    BrowserModule, MaterialModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent ,
    TableFilteringComponent

})
export class AppModule { }
