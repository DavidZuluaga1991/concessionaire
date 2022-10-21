import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, PipesModule],
  exports: [CardComponent],
})
export class CardModule {}
