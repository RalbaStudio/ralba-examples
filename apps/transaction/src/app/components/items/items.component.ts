import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Input } from '@angular/core';


import { Observable } from 'rxjs';
import { Item } from '../../features/data/model/item';
import * as action from '../../features/data/actions';
import * as ItemSelector from '../../features/data/selectors/index';
import { NavigationActionTiming } from '@ngrx/router-store';
import { fireItemService } from '../../Services/fireItem.service';




@Component({
  selector: 'tran-items',
  templateUrl: './items.component.html',
  styles: ['th{ padding: 14px;}']
})
export class ItemsComponent implements OnInit {

  items$ = this.store.pipe(select(ItemSelector.selectAllItems));
  items: Item[] = []
  title = "Items";
  router: any;

  createItem() {
    return null;
  }

ngOnInit(): void {
  //this.fireItemService.getAllItems()
    // this.store.dispatch(action.ItemActions.loadItems());
}
  
  delete(item: Item): void {
    //this.itemService.deleteItem(item);
    // this.store.dispatch(action.ItemActions.deleteItem({ id: item.id }))
  }

  update(item :Item){

    this.router1.navigate(
      ['/create-item'],
    { queryParams: { id: item.id } }
    )
    return null
  }

  constructor(private itemService: ItemService, private fireItemService: fireItemService, private router1 :Router,private store: Store<any>){

  }

  }
