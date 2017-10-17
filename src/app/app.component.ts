import {Component} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {IngredientList} from './shared/ingredient-list';
import {isEqual, sortBy} from 'lodash';
import {Ingredient} from './model/ingredient';
import {Potion} from './model/potion';
import {LocalStorage, LocalStorageService} from 'ngx-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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

  @LocalStorage('potionRecipes') potionRecipes: Array<Potion> = [
    new Potion({
      name: 'Stress',
      imageUrl: 'http://www.helpguide.org/images/stress/stressed-man-500.jpg',
      ingredients: [
        this.ingredientList.get('AP Test'),
        this.ingredientList.get('IB Test')
      ]
    }),
    new Potion({
      name: 'IB Diploma',
      imageUrl: 'https://cdn2.hubspot.net/hubfs/360031/body_ibcurintro.jpg',
      ingredients: [
        this.ingredientList.get('Pencil'),
        this.ingredientList.get('IB Test')
      ]
    })
  ];

  constructor(private dragulaService: DragulaService, localStorageService: LocalStorageService) {
    if (!localStorageService.get('ingredients') ||
      !isEqual(sortBy(localStorageService.get('ingredients'), 'name'), sortBy(this.ingredientList.ingredients, 'name')))
      localStorageService.set('ingredients', this.ingredientList.ingredients);

    dragulaService.setOptions('ingredients-bag', {
      removeOnSpill: true,
      copy: (el, source) => source.id === 'ingredients',
      copySortSource: false,
      accepts: (el, target, source, sibling) => target.id !== 'ingredients'
    });

    dragulaService.setOptions('potion-bag', {
      revertOnSpill: true
    });
  }
}
