import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EFFECTS } from './effects';
import { FEATURE_KEY, reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_KEY, reducers),
    EffectsModule.forFeature(EFFECTS),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class TemplateDomainModule {}
