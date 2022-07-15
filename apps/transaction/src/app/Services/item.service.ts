import { Injectable } from '@angular/core';
import { BehaviorSubject, ignoreElements, Observable, of } from 'rxjs';

import { Item } from '../features/data/model/item';
import { ITEMS } from '../features/data/model/mock-items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: BehaviorSubject<Item[]> = new BehaviorSubject(ITEMS);

  getItems(): Observable<Item[]> {
    return this.items;
  }

  getItem() {
    return this.items.getValue();
  }

  getItemById(id: string) {
    const newItems = this.items.getValue();
    const itemWithID = newItems.find((obj) => {
      return obj.id === id;
    });
    return itemWithID;
  }

  addItem(item: Item) {
    const newStateOfItems = this.items.getValue();
    this.items.next([...newStateOfItems, item]);
  }

  updateItem(item: Item, id: string) {
    const newStateOfItems = this.items.getValue();
    const itemWithID: number = newStateOfItems.findIndex((obj) => {
      return obj.id === id;
    });
    newStateOfItems[itemWithID] = item;
    this.items.next([...newStateOfItems]);
 }
  deleteItem(item: Item) {
    console.log(item);
    const newStateOfItems = this.items.getValue();
    const deleteItem = newStateOfItems.filter((i) => i.id !== item.id);
    console.log(deleteItem);
    this.items.next([...deleteItem]);
  }
}
