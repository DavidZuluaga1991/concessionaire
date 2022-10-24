import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedOptionComponent } from './selected-option.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectedOptionComponent],
  imports: [CommonModule, FormsModule],
  exports: [SelectedOptionComponent],
})
export class SelectedOptionModule {}
