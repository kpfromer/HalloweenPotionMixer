import {Ingredient} from './ingredient';
import {IngredientList} from "../shared/ingredient-list";

export class Potion {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];
  effect: () => any;


  constructor(data: { name: string, imageUrl: string, ingredientList?: IngredientList, ingredients?: string[], effect: () => any }) {
    this.name = data.name;
    this.imageUrl = "./assets/potions/" + data.imageUrl;
    this.effect = data.effect;
    if (data.ingredientList && data.ingredients)
      this.ingredients = data.ingredients.map(name => data.ingredientList.get(name));
  }
}
