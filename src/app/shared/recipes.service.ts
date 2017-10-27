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
      name: 'Phone', imageUrl: 'phone.jpg'
    }),
    new Ingredient({
      name: 'Computer', imageUrl: 'computer.jpg'
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
      name: 'Pumpkin', imageUrl: 'pumpkin.jpg'
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
      } // todo: shake screen
    }),
    new Potion({
      name: 'Laziness',
      imageUrl: 'lazy.jpg',
      ingredientList: this.ingredientList,
      ingredients: [
        'Standardized Tests',
        'Phone'
      ],
      effect: () => window.location.href = 'http://www.coolmath-games.com/0-run-3'
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
      } // todo: ?
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
      } // todo: ?
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
      } // todo: ?
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
      } // todo: ?
    }),

    // Phone

    new Potion({
      name: 'Happiness', // todo: puppy explosion
      imageUrl: 'happy.jpg',
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
      imageUrl: 'bvsd.png',
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
      imageUrl: 'cookie.png',
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
      imageUrl: 'pinterest.png',
      ingredientList: this.ingredientList,
      ingredients: [
        'Phone',
        'Pumpkin'
      ],
      effect: () => window.location.href = 'https://www.pinterest.com/explore/jack-o\'-lantern/?lp=true'
    }),
    new Potion({
      name: 'Mobile Site',
      imageUrl: 'mobile.png',
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
      imageUrl: 'web-team.png',
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
      imageUrl: 'rivalry.jpg',
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
      name: 'IB Store',
      imageUrl: 'store.png',
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
      imageUrl: 'rivalry.jpg',
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
      imageUrl: 'trick-or-treat.jpg',
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
      imageUrl: 'web-team.jpg',
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
      imageUrl: 'bvsd.png',
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
      imageUrl: 'rivalry.jpg',
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
      imageUrl: 'skeleton.jpg',
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
      imageUrl: 'april-fools.jpj',
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
      effect: () =>
        window.location.href = 'http://www.makeuseof.com/tag/whats-a-cookie-and-what-does-it-have-to-do-with-my-privacy-makeuseof-explains/'
    }),

    // BVSD

    new Potion({
      name: 'mr skeltal',
      imageUrl: 'skeleton.png',
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
      imageUrl: 'skeleton.png',
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
