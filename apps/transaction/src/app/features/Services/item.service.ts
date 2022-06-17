import { Injectable } from '@angular/core';

import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {


  getItems() :Item[]{
    return ITEMS;
  }

}