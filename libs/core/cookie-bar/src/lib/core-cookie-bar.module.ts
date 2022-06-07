import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COOKIE_BAR_CONTAINERS } from './containers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_KEY, reducer } from './reducers';
import { CookieBarEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_KEY, reducer),
    EffectsModule.forFeature([CookieBarEffects]),
  ],
  declarations: [...COOKIE_BAR_CONTAINERS],
  exports: [...COOKIE_BAR_CONTAINERS],
})
export class CoreCookieBarModule {}
