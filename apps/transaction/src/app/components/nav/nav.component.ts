import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

import * as _ from '../../features/data/selectors/nav.selector';
import {NavBarAction} from '../../features/data/actions/nav.action'

@Component({
  selector: 'tran-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isVisible = false;
   visibility = {
    //isvisible: true
   };

  tabs: MenuItem[] = [];
   isVisible$: Observable<boolean>
   constructor( private store: Store<{isVisible: boolean}>){
    this.isVisible$ = store.select('isVisible');
   }


   showMenu(){
    this.store.dispatch(NavBarAction.showMenu());
     this.visibility = _
     console.log(this.visibility);
     
   };

   hideMenu(){
    this.store.dispatch(NavBarAction.hideMenu());
   }
   
  ngOnInit(): void {
    this.tabs = [{
      label: 'Transaction',
      items: [{
          label: 'Dashboard',
          icon: 'pi pi-refresh',
          routerLink: ['/dashboard']
      },
      {
          label: 'Items',
          icon: 'pi pi-times',
      }
      ]},
      {
          label: 'Templates',
          items: [{
              label: 'Angular Website',
              icon: 'pi pi-external-link',
              url: 'http://angular.io',
              routerLink: ['/items']
          },
          {
              label: 'Router',
              icon: 'pi pi-upload'
          }
      ]}
  ];

  }
}
