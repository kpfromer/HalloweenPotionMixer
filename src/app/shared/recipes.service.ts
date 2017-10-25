import {Injectable} from '@angular/core';
import {Potion} from "../model/potion";
import {IngredientList} from "./ingredient-list";
import {Ingredient} from "../model/ingredient";

@Injectable()
export class RecipesService {

  ingredientList: IngredientList = new IngredientList([
    new Ingredient({
      name: 'Standardized Tests', imageUrl: ''
    }),
    new Ingredient({
      name: 'College', imageUrl: ''
    }),
    new Ingredient({
      name: 'Phone', imageUrl: ''
    }),
    new Ingredient({
      name: 'Computer', imageUrl: ''
    }),
    new Ingredient({
      name: 'A Panther', imageUrl: ''
    }),
    new Ingredient({
      name: 'A Knight', imageUrl: ''
    }),
    new Ingredient({
      name: 'BVSD', imageUrl: ''
    }),
    new Ingredient({
      name: 'Cookies', imageUrl: ''
    }),
    new Ingredient({
      name: 'Football', imageUrl: ''
    }),
    new Ingredient({
      name: 'Pumpkin', imageUrl: ''
    }),
    new Ingredient({
      name: 'fairviewhs.org', imageUrl: ''
    })
  ]);

  potionRecipes: Array<Potion> = [
    // Standardized Tests
    new Potion({
      name: 'Stress Explosion',
      imageUrl: 'http://www.helpguide.org/images/stress/stressed-man-500.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'College'
      ],
      effect: () => {
      } // todo: shake screen
    }),
    new Potion({
      name: 'Laziness',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'Phone'
      ],
      effect: () => window.location.href = 'http://www.coolmath-games.com/0-run-3'
    }),
    new Potion({
      name: 'Procrastination',
      imageUrl: '',
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
      imageUrl: '',
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
      imageUrl: '',
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
      imageUrl: '',
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
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'A Panther'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Stress',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'A Knight'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Stress',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'Cookies'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Concussion',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'College',
        'Football'
      ],
      effect: () => {
      } // todo: ?
    }),

    // Phone

    new Potion({
      name: 'Happiness', // todo: puppy explosion
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'Computer'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'BVSD Error',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'BVSD'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Web Cookie',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'Cookies'
      ],
      effect: () => window.location.href =
        'http://www.makeuseof.com/tag/whats-a-cookie-and-what-does-it-have-to-do-with-my-privacy-makeuseof-explains/'
    }),
    new Potion({
      name: 'Pinterest Board',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'Pumpkin'
      ],
      effect: () => window.location.href = 'https://www.pinterest.com/explore/jack-o\'-lantern/?lp=true'
    }),
    new Potion({
      name: 'Mobile Site',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'fairviewhs.org'
      ],
      effect: () => window.location.href = 'https://www.fairviewhs.org/?mobile=1'
    }),

    // A Knight

    new Potion({
      name: 'Fairview Web Team',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Computer'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'A Panther'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'BVSD Error',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'BVSD'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'IB Store',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Cookies'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Football'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Trick or Treat Street',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'Pumpkin'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Fairview Web Team',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Knight',
        'fairviewhs.org'
      ],
      effect: () => window.location.href = 'https://www.fairviewhs.org/'
    }),

    // A Panther

    new Potion({
      name: 'BVSD Error',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'BVSD'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'Rivalry',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'Football'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'mr skeltal',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'A Panther',
        'Pumpkin'
      ],
      effect: () => {
      } // todo: ?
    }),
    new Potion({
      name: 'April Fools',
      imageUrl: '',
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
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'Cookie',
        'fairviewhs.org'
      ],
      effect: () =>
        window.location.href = 'http://www.makeuseof.com/tag/whats-a-cookie-and-what-does-it-have-to-do-with-my-privacy-makeuseof-explains/'
    }),

    // BVSD

    new Potion({
      name: 'mr skeltal',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'BVSD',
        'Pumpkin'
      ],
      effect: () => {
      } // todo: add
    }),

    // Pumpkin

    new Potion({
      name: 'mr skeltal',
      imageUrl: '',
      ingredientList: this.ingredientList,
      ingredients: [
        'fairviewhs.org',
        'Pumpkin'
      ],
      effect: () => {
      } // todo: add
    })
  ];

  constructor() {
  }

}
