import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../../types/Item';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  @Input() list: Item[] = [];

  // @Input({required: true}) selectItem!: (item: Item) => void;
  // @Input() selectItem: (item: Item) => void = () => {};

  @Output() itemEmitter = new EventEmitter<Item>();

  selectItem(item: Item): void {
    this.itemEmitter.emit(item);
  }
}
