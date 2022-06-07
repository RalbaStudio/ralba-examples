import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CookieActions } from '../actions';
import { CookieService } from 'ngx-cookie-service';
import { ConfigurationService } from '@ralba-examples/core/configuration';


@Injectable()
export class CookieBarEffects {
  onInitCookieBar$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(CookieActions.initCookie),
        map((action) => {
          return CookieActions.detectCookie({
            detected: true,
            enable:
              this.cookieService.get(
                this.configurationService.get('cookieBarKey') || 'cookieBarKey'
              ) == 'agree'
                ? true
                : null,
          });
        })
      ),
    { dispatch: true }
  );

  onSetCooke$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(CookieActions.setCookie),
        map((p) => {
          if (p.enable) {
            this.cookieService.set(
              this.configurationService.get('cookieBarKey') || 'cookieBarKey',
              'agree',
              60,
              '/'
            );
          }
          //return GtmActions.initGa();
        })
      ),

    { dispatch: false }
  );

  constructor(
    private _store$: Store<any>,
    private _actions: Actions,
    private cookieService: CookieService,
    private configurationService: ConfigurationService
  ) {}
}
