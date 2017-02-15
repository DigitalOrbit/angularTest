import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() cols = '';
  @Input() rows = '';
  @Input() helpText = '';

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  update(val: string) {
    this.value = val;
    this.valueChange.emit(this.value);
  }

}
