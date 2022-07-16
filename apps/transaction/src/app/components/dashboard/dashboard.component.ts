import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';

import { Item } from '../../features/data/model/item';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as fromItem from "../../features/data/reducers/item.reducer";
import * as actions from "../../features/data/actions/index";
//import { ITEMS } from '../mock-items';


@Component({
  selector: 'tran-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //items: Item[] = [];
  items$: Observable<any> | undefined;

  constructor(private  store: Store<any>, private afs: AngularFirestore) {}
  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    //this.itemService.getItems().subscribe(items => this.items = items);
    this.items$ = this.store.select(fromItem.selectAll)
    this.store.dispatch(actions.ItemActions.QUERY());
  }
}
