import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { CoreFormlyAllModulesModule } from '@ralba-examples/core/formly/all-modules';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AppConfigModule } from '@ralba-examples/core/configuration';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { rootReducers } from '@ralba-examples/core/common';
import {
  NavigationActionTiming,
  RouterState,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { AppRoutingModule } from './app.module.routing';
import { CoreCookieBarModule } from '@ralba-examples/core/cookie-bar';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // FormlyModule,
    // CoreFormlyAllModulesModule,
    AppRoutingModule,
    AppConfigModule.forRoot(environment.config),
    StoreModule.forRoot(rootReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      navigationActionTiming: NavigationActionTiming.PreActivation,
    }),
    CoreCookieBarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true,
    }),
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
