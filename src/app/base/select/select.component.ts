import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() selection;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  update (val: number) {
    this.value = val;
    this.valueChange.emit(this.value);
  }

  constructor() {
    this.value = 1;
  }

  ngOnInit() {}
}
