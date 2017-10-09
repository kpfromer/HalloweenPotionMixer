import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IngredientsListComponent} from './ingredients-list/ingredients-list.component';
import {CauldronListComponent} from './cauldron-list/cauldron-list.component';
import {PotionListComponent} from './potion-list/potion-list.component';
import {DragulaModule} from 'ng2-dragula';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PotionComponent } from './potion/potion.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsListComponent,
    CauldronListComponent,
    PotionListComponent,
    IngredientComponent,
    PotionComponent
  ],
  imports: [
    DragulaModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
