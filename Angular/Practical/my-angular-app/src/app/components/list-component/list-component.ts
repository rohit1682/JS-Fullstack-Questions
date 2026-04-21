import { Component } from '@angular/core';
import { Item } from '../../../types/Item';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {
  
  itemList: Item[] = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" }
  ];

  selectedItem: Item|null = null;

  selectItem(item: Item): void {
    this.selectedItem = item;
  }
}
