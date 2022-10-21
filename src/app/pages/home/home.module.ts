import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { AutocompleteModule } from 'src/app/shared/autocomplete/autocomplete.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ModalModule,
    AutocompleteModule,
    PipesModule,
  ],
})
export class HomeModule {}
