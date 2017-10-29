import {Injectable} from '@angular/core';
import {Potion} from "../model/potion";
import {IngredientList} from "./ingredient-list";
import {Ingredient} from "../model/ingredient";

@Injectable()
export class RecipesService {

  ingredientList: IngredientList = new IngredientList([
    new Ingredient({
      name: 'Standardized Tests', imageUrl: 'test.jpg'
    }),
    new Ingredient({
      name: 'College', imageUrl: 'college.jpg'
    }),
    new Ingredient({
      name: 'A Phone', imageUrl: 'phone.jpg'
    }),
    new Ingredient({
      name: 'A Computer', imageUrl: 'computer.jpg'
    }),
    new Ingredient({
      name: 'A Panther', imageUrl: 'panther.jpg'
    }),
    new Ingredient({
      name: 'A Knight', imageUrl: 'knight.jpg'
    }),
    new Ingredient({
      name: 'BVSD', imageUrl: 'bvsd.png'
    }),
    new Ingredient({
      name: 'Cookies', imageUrl: 'cookies.jpg'
    }),
    new Ingredient({
      name: 'Football', imageUrl: 'football.jpg'
    }),
    new Ingredient({
      name: 'Pumpkins', imageUrl: 'pumpkin.jpg'
    }),
    new Ingredient({
      name: 'fairviewhs.org', imageUrl: 'site.png'
    })
  ]);

  potionRecipes: Array<Potion> = [
    // Standardized Tests
    new Potion({
      name: 'Stress',
      imageUrl: 'stress.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'College'
      ],
      effect: () => {
      }
    }),
    new Potion({
      name: 'Procrastination',
      imageUrl: 'procrastinate.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'A Phone'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'Procrastination',
      imageUrl: 'procrastinate.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'Cookies'
      ],
      effect: () => {
      }// todo: ?
    }),
    new Potion({
      name: 'Money',
      imageUrl: 'money.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'BVSD'
      ],
      effect: () => {
      } // todo: rain down dollar bills?
    }),
    new Potion({
      name: 'Procrastination',
      imageUrl: 'procrastinate.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'Football'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Honors',
      imageUrl: 'honors.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'fairviewhs.org'
      ],
      effect: () => window.location.href = 'https://www.fairviewhs.org/honors'
    }),

    // College
    new Potion({
      name: 'Insomnia',
      imageUrl: 'insomnia.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'A Panther'
      ],
      effect: () => {
      }
    }),

    new Potion({
      name: 'Stress',
      imageUrl: 'stress.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'A Knight'
      ],
      effect: () => {
      }
    }),

    new Potion({
      name: 'Stress',
      imageUrl: 'stress.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'Cookies'
      ],
      effect: () => {
      }
    }),
    new Potion({
      name: 'Concussion',
      imageUrl: 'concussion.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'Football'
      ],
      effect: () => {
      }
    }),

    // Phone

    new Potion({
      name: 'Happiness', // todo: puppy explosion
      imageUrl: 'happy.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Phone',
        'A Computer'
      ],
      effect: () => {
      }
    }),
    new Potion({
      name: 'Restricted',
      imageUrl: 'bvsd.png',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Phone',
        'BVSD'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Web Cookie',
      imageUrl: 'cookie.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Phone',
        'Cookies'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'Web Cookie',
      imageUrl: 'cookie.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Computer',
        'Cookies'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'Web Cookie',
      imageUrl: 'cookie.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'fairviewhs.org',
        'Cookies'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'Pinterest',
      imageUrl: 'pinterest.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Phone',
        'Pumpkins'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'The Mobile Site',
      imageUrl: 'mobile.png',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Phone',
        'fairviewhs.org'
      ],
      effect: () => {}
    }),

    // A Knight

    new Potion({
      name: 'Web Team',
      imageUrl: 'web-team.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'A Computer'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: 'rivalry.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'A Panther'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'BVSD Error',
      imageUrl: 'bvsd.png',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'BVSD'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Procrastination',
      imageUrl: 'procrastination.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Cookies'
      ],
      effect: () => {
      }
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: 'rivalry.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Football'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'mr skeltal',
      imageUrl: 'mr-skeletal.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Pumpkins'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Fairview Web Team',
      imageUrl: 'web-team.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'fairviewhs.org'
      ],
      effect: () => {}
    }),

    // A Panther

    new Potion({
      name: 'BVSD Error',
      imageUrl: 'bvsd.png',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'BVSD'
      ],
      effect: () => {
      }
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: 'rivalry.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'Football'
      ],
      effect: () => {}
    }),
    new Potion({
      name: 'mr skeltal',
      imageUrl: 'mr-skeletal.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'Pumpkins'
      ],
      effect: () => {
      } // todo: ADD THIS
    }),
    new Potion({
      name: 'April Fools',
      imageUrl: 'april-fools.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'fairviewhs.org'
      ],
      effect: () => {
      } // todo: ?
    }),

    // Cookie

    new Potion({
      name: 'Web Cookie',
      imageUrl: 'cookie.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Cookie',
        'fairviewhs.org'
      ],
      effect: () => {}
    }),

    // BVSD

    new Potion({
      name: 'mr skeltal',
      imageUrl: 'mr-skeletal.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'BVSD',
        'Pumpkins'
      ],
      effect: () => {
      }
    }),

    // Pumpkin

    new Potion({
      name: 'mr skeltal',
      imageUrl: 'mr-skeletal.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'fairviewhs.org',
        'Pumpkins'
      ],
      effect: () => {
      }
    })
  ];

  constructor() {
  }

}
