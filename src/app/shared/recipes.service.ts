import {Injectable} from '@angular/core';
import {Potion} from "../model/potion";
import {IngredientList} from "./ingredient-list";
import {Ingredient} from "../model/ingredient";

@Injectable()
export class RecipesService {

  ingredientList: IngredientList = new IngredientList([
    new Ingredient({
      name: 'AP Test',
      imageUrl: 'https://www.mndhs.org/uploaded/academics/guidance/apcollegeboardlogo2.png'
    }),
    new Ingredient({
      name: 'IB Test',
      imageUrl: 'http://www.eduinreview.com/blog/wp-content/uploads/2009/03/international-baccalaureate.gif'
    }),
    new Ingredient({
      name: 'Pencil',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61N7NOKhVCL._SX355_.jpg'
    })
  ]);

  potionRecipes: Array<Potion> = [
    new Potion({
      name: 'Stress',
      imageUrl: 'http://www.helpguide.org/images/stress/stressed-man-500.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'AP Test',
        'IB Test'
      ],
      effect: () => console.log('yo')
    }),
    new Potion({
      name: 'IB Diploma',
      imageUrl: 'https://cdn2.hubspot.net/hubfs/360031/body_ibcurintro.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Pencil',
        'IB Test'
      ],
      effect: () => console.log('test')
    })
  ];

  constructor() {
  }

}
