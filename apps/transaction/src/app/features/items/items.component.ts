import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

import { Observable } from 'rxjs';
import {FilterService} from 'primeng/api';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'tran-items',
  templateUrl: './items.component.html',
  styles: ['th{ padding: 14px;}']
})
export class ItemsComponent {

  //@Input() Item?: Item;
  items$: Observable<Item[]> = this.itemService.getItems();
 
  title = "Items";
  createItem() {
    return null;
  }

  constructor(private itemService: ItemService){

  }

  }
