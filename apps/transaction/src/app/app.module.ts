import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ItemsComponent } from './features/items/items.component';
import { AppRoutingModule } from './features/Services/app-routing.module';
import { CreateItemComponent } from './create-item/create-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ItemsComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
