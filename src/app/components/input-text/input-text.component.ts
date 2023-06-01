import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  internalValue: string = '';

  ngOnInit(): void {
    this.internalValue = this.value;
  }

  setValue(newValue: string) {
    this.internalValue = newValue;
    this.onChange.emit(newValue);
  }
}
