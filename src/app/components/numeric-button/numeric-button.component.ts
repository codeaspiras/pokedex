import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.scss']
})
export class NumericButtonComponent implements OnChanges {
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
      const value = changes['value']?.currentValue;
      if (value !== undefined) {
        this.value = value;
      }

      const disabled = changes['disabled']?.currentValue;
      if (disabled !== undefined) {
        this.disabled = disabled;
      }
  }

  click(event: MouseEvent): void {
    event.preventDefault();
    this.onClick.emit(this.value);
  }

}
