import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() smallText = '';

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  update(val: string) {
    this.value = val;
    this.valueChange.emit(this.value);
  }

}
