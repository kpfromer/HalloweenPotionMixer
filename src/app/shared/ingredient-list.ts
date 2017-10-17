import {Ingredient} from '../model/ingredient';

export class IngredientList {
  ingredients: Ingredient[];

  get(name: string) {
    return this.ingredients.find(ingredient => ingredient.name === name);
  }

  constructor(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }
}
