import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-com',
  templateUrl: './button-com.component.html',
  styleUrls: ['./button-com.component.css'],
  standalone:true,
})
export class ButtonComComponent {
  @Input() btnText!: string;
  @Output() btnClick = new EventEmitter<void>();

  handleClick() {
    this.btnClick.emit(); 
  }
}
