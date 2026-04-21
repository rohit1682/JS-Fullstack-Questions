import { Component } from '@angular/core';
import { Item } from '../../../../types/Item';
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  itemList: Item[] = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" }
  ];

  selectedItem: Item| null = null;
  
  selectItem(item: Item): void {
    this.selectedItem = item;
  }

}
