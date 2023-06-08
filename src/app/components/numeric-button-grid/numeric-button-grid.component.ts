import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-button-grid',
  templateUrl: './numeric-button-grid.component.html',
  styleUrls: ['./numeric-button-grid.component.scss']
})
export class NumericButtonGridComponent {
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  rows: number[][] = [
    [0,1,2,3,4],
    [5,6,7,8,9],
  ];

  click(value: number): void {
    this.onClick.emit(value);
  }
}
