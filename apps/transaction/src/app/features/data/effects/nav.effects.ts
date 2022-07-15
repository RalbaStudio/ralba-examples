import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { NavBarAction } from "../actions/nav.action";
import { ConfigurationService } from "@ralba-examples/core/configuration";
import { mergeMap } from "rxjs";


@Injectable()
export class NavBarEffects{

/*
  onInitNavBar$ = createEffect(() =>
this._actions.pipe(ofType('[Nav Component] show')));

);
*/

  constructor(
    private store$: Store<any>,
     private _actions: Actions,
      private configurationService: ConfigurationService
      ){}
}