import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Task12Component } from './task12/task12.component';
import { Task13Component } from './task13/task13.component';
import { Task19Component } from './task19/task19.component';
//import { PagerService } from './pager.service';
import { PagerService } from './index';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Task12Component,
    Task13Component,
    Task19Component,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
