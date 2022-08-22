import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          canActivate: [AppGuard],
          path: '',
          children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
              path: 'home',
              loadChildren: () =>
                import('./features/home').then(({ HomeModule }) => HomeModule),
            },
          ],
        },
      ],
      {
        initialNavigation: 'enabledBlocking',

        anchorScrolling: 'enabled',
        paramsInheritanceStrategy: 'always',
        // scrollPositionRestoration: 'top',
        // elativeLinkResolution: 'legacy',
        scrollPositionRestoration: 'disabled',
        //paramsInheritanceStrategy: 'always',
        //onSameUrlNavigation: 'reload'
        relativeLinkResolution: 'corrected',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
