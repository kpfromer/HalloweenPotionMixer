import {Ingredient} from './ingredient';

export class Potion {
  name: string;
  imageUrl: string;
  ingredients: Ingredient[];


  constructor(data: { name: string, imageUrl: string, ingredients: Ingredient[] }) {
    this.name = data.name;
    this.imageUrl = data.imageUrl;
    this.ingredients = data.ingredients;
  }
}
