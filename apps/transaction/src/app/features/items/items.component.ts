import { Component, Input, OnInit } from '@angular/core';

import {FilterService} from 'primeng/api';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'tran-items',
  templateUrl: './items.component.html',
  styleUrls: []
})
export class ItemsComponent {

  @Input() Item?: Item;

  title = "Items";
  items = ITEMS;


  }
