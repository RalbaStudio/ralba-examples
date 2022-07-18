import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemActions } from './features/data/actions';

@Component({
  selector: 'tran-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transaction';
  constructor(public store$: Store<never>) {}

  ngOnInit() {
    this.store$.dispatch(ItemActions.QUERY());
  }
}
