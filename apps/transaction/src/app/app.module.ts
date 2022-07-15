import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreFormlyAllModulesModule } from '@ralba-examples/core/formly/all-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DataModule } from './features/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { rootReducers } from '@ralba-examples/core/common';
//import { FireItemModule } from './fireItem/fireItem.module';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemsComponent } from './components/items/items.component';
import { AppRoutingModule } from './Services/app-routing.module';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuModule } from 'primeng/menu';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ItemEffects } from './features/data/effects/item.effects';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ItemsComponent,
    CreateItemComponent,
    NavComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CardModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    BrowserAnimationsModule,
    CoreFormlyAllModulesModule,
    MenuModule,
    DataModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(rootReducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true,
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
