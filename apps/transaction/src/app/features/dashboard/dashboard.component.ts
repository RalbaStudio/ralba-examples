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
  items: Item[] = [];

  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
}
