import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-comp',
  templateUrl: './heading-comp.component.html',
  standalone:true,
  styleUrls: ['./heading-comp.component.css']
})
export class HeadingCompComponent {
  @Input() headingText!: string;
}
