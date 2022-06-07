import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CookieActions } from '../../actions';
import { CookieBarSelectors } from '../../selectors';

@Component({
  selector: 'ral-cookie-bar',
  templateUrl: './cookie-bar.container.html',
  styleUrls: ['./cookie-bar.container.scss'],
})
export class CookieBarComponent implements OnInit {
  // allowed: boolean;
  cookieOpened$: Observable<boolean> = this.store$.pipe(
    select(CookieBarSelectors.selectCookieOpen)
  );

  @Input() customContent = false;
  @Input() className = '';

  @Input() agreeText = 'Souhlasím';
  @Input() disagreeText = 'Nesouhlasím';

  @Input() body =
    'Tato webová aplikace používá k poskytování služeb a analýze návštěvnosti soubory cookie. Používáním tohoto webu souhlasíte s podmínkami používání souborů cookie. ';
  @Input() link = '';
  @Input() linkText = 'Více o cookie';

  constructor(private store$: Store<any>) {}

  ngOnInit() {
    this.store$.dispatch(CookieActions.initCookie());
  }

  confirm() {
    this.store$.dispatch(CookieActions.setCookie({ enable: true }));
  }

  reject() {
    this.store$.dispatch(CookieActions.setCookie({ enable: false }));
  }
}
