import {Ingredient} from './ingredient';
import {IngredientList} from "../shared/ingredient-list";

export class Potion {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];


  constructor(data: { name: string, imageUrl: string, ingredientList?: IngredientList, ingredients?: string[] }) {
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    if (data.ingredientList && data.ingredients)
      this.ingredients = data.ingredients.map(name => data.ingredientList.get(name));
  }
}
