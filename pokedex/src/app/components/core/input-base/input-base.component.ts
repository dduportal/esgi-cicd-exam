import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.css']
})
export class InputBaseComponent {
  @Input() placeholder = ''
  @Output() value = '';
}
