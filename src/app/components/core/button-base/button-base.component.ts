import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-base',
  templateUrl: './button-base.component.html',
  styleUrls: ['./button-base.component.css']
})
export class ButtonBaseComponent {
  @Input({required:true}) value = ''
}
