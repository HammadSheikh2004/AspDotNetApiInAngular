import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './Component/header-comp/header-comp.component';
import { FormsModule } from '@angular/forms'; 
import { SearchPipe } from './search.pipe';
import { CommonModule } from '@angular/common'; 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { HeadingCompComponent } from './Component/heading-comp/heading-comp.component';
import { DisplayDataComponent } from './Component/display-data/display-data.component';
import { AddDataComponent } from './Component/add-data/add-data.component';
import { ButtonComComponent } from './Component/button-com/button-com.component';
import { EditCompComponent } from './Component/edit-comp/edit-comp.component';
import { SearchCompComponent } from './Component/search-comp/search-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DisplayDataComponent,
    HeadingCompComponent,
    AddDataComponent,
    ButtonComComponent,
    EditCompComponent,
    FormsModule,
    SearchCompComponent,
    SearchPipe,
    CommonModule,
    SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
