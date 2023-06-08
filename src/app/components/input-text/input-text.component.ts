import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, OnChanges {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  internalValue: string = '';

  ngOnInit(): void {
    this.internalValue = this.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
      const label = changes['label']?.currentValue;
      if (label !== undefined) {
        this.label = label;
      }

      const value = changes['value']?.currentValue;
      if (value !== undefined) {
        this.value = value;

        if (value !== this.internalValue) {
          this.internalValue = value;
        }
      }
  }

  setValue(newValue: string) {
    this.internalValue = newValue;
    this.onChange.emit(newValue);
  }
}
