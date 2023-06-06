import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchQueryChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any): void {
    const query: string = event?.target?.value || '';
    this.searchQueryChange.emit(query);
    console.log(this.searchQueryChange);
  }
}
