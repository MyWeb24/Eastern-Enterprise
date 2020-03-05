import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditModule } from './add-edit/add-edit.module';
import { SearchFilterModule } from './search-filter/search-filter.module';
import { ShowDetailsModule } from './show-details/show-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddEditModule,
    SearchFilterModule,
    ShowDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
