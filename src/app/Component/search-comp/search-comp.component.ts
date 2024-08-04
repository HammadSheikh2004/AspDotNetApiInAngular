import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-comp',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css'],
})
export class SearchCompComponent {
  @Input() searchText: string = '';
  @Output() searchTextChange = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChange.emit(this.searchText);
  }
 
}
