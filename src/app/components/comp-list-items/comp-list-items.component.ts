import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-list-items',
  templateUrl: './comp-list-items.component.html',
  styleUrls: ['./comp-list-items.component.scss'],
})
export class CompListItemsComponent implements OnInit {
  @Input() itemsTitle?: string;
  @Input() itemsList!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.itemsList);
  }
}
