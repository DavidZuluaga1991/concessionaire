import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducer as carsByBrandsReducer } from './store/reducers/cars-by-brand.reducer';
import { reducer as filterReducer } from './store/reducers/filters.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsByBrandEffects } from './store/effects/cars-by-brand.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { FiltersEffects } from './store/effects/filters.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      cars: carsByBrandsReducer,
      filter: filterReducer,
    }),
    EffectsModule.forRoot([CarsByBrandEffects, FiltersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
