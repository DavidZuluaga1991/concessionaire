import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input() data: string[] = [];
  @Output() search = new EventEmitter<string>();
  public dataField = '';
  public dataAutocomplete: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  public sendData() {
    this.search.emit(this.dataField);
  }
}
