import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Condition } from 'src/app/core/models/condition.model';

@Component({
  selector: 'app-selected-option',
  templateUrl: './selected-option.component.html',
  styleUrls: ['./selected-option.component.scss'],
})
export class SelectedOptionComponent implements OnChanges {
  @Input() data: Condition[] = [];
  @Output() selectedOption = new EventEmitter<Condition>();
  public dataSelected?: Condition;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data.length > 0) {
      this.dataSelected = this.data[0];
      this.selectedOption.emit(this.data[0]);
    }
  }

  public selectOption(condition: Condition) {
    this.selectedOption.emit(condition);
  }
}
