import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IngredientsListComponent} from './ingredients-list/ingredients-list.component';
import {CauldronListComponent} from './cauldron-list/cauldron-list.component';
import {PotionListComponent} from './potion-list/potion-list.component';
import {DragulaModule} from 'ng2-dragula';
import {IngredientComponent} from './shared/ingredient/ingredient.component';
import {PotionComponent} from './shared/potion/potion.component';
import {WebStorageModule} from 'ngx-store';
import {NewPotionService} from './shared/new-potion.service';
import {MundanePotionService} from "./shared/mundane-potion.service";
import {RecipesService} from "./shared/recipes.service";

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
    WebStorageModule,
    BrowserModule
  ],
  providers: [
    NewPotionService,
    MundanePotionService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
