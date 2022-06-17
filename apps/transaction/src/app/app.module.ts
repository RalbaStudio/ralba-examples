import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ItemsComponent } from './features/items/items.component';
import { AppRoutingModule } from './features/Services/app-routing.module';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,DashboardComponent,ItemsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
