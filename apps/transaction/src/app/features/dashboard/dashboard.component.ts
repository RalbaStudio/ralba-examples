import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

import { Item } from '../item';
//import { ITEMS } from '../mock-items';

@Component({
  selector: 'tran-dashboard',
  templateUrl: './dashboard-component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //items = ITEMS;
  items: Item[] = [];
  titleDashboard = 'Dashboard';
  selectedItem?: Item;

  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.getItems();
  }
  createItem() {
    return null;
  }
  getItems(): void {
    this.items = this.itemService.getItems();
  }
  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}
