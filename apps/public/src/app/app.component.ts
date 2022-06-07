import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  CookieActions,
  CookieBarSelectors,
} from '@ralba-examples/core/cookie-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'ralba-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cookieOpened$: Observable<boolean> = this.store$.pipe(
    select(CookieBarSelectors.selectCookieOpen)
  );

  constructor(private platform: Platform, public store$: Store<never>) {}

  ngOnInit(): void {
    if (this.platform.isBrowser) {
      this.store$.dispatch(CookieActions.initCookie());
    }
  }

  confirm() {
    this.store$.dispatch(CookieActions.setCookie({ enable: true }));
  }

  reject() {
    this.store$.dispatch(CookieActions.setCookie({ enable: false }));
  }
}
