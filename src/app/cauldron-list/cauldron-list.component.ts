import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../model/ingredient';
import {DragulaService} from 'ng2-dragula';
import {isEqual, map, sortBy} from 'lodash';
import {LocalStorage} from 'ngx-store';
import {NewPotionService} from '../shared/new-potion.service';
import {MundanePotionService} from "../shared/mundane-potion.service";
import {RecipesService} from "../shared/recipes.service";

@Component({
  selector: 'app-cauldron-list',
  templateUrl: './cauldron-list.component.html',
  styleUrls: ['./cauldron-list.component.css']
})
export class CauldronListComponent implements OnInit {

  @LocalStorage('cauldronIngredients') ingredients: Array<Ingredient> = [];

  constructor(dragulaService: DragulaService, private potionService: NewPotionService,
              private mundanePotion: MundanePotionService, private recipeService: RecipesService) {
    dragulaService.dropModel.subscribe(() => this.onDrop());
    dragulaService.removeModel.subscribe(() => this.onDrop());
  }

  onDrop() {
    if (this.ingredients.length !== 2) {
      return false;
    } else if (this.ingredients.length >= 2) {
      for (const potionRecipe of this.recipeService.potionRecipes) {
        const potionRecipeIngredients = map(potionRecipe.ingredients, 'name').sort();
        const currentIngredients = map(this.ingredients, 'name').sort();

        if (isEqual(currentIngredients, potionRecipeIngredients)) {
          this.potionService.createNewPotion(potionRecipe);
          return this.ingredients = [];
        }
      }
      this.potionService.createNewPotion(this.mundanePotion.potion);
      return this.ingredients = [];
    }
  }

  ngOnInit() {
  }

}
