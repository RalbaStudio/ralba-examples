import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ConfigurationService } from '@ralba-examples/core/configuration';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  constructor(
    public configurationService: ConfigurationService,
    public router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.configurationService
      .load()
      .then(() => true)
      .catch(() => {
        window.location.assign('/assets/errors/500.html');
        return false;
      });
  }
}
