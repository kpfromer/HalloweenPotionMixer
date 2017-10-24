import {Component} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {isEqual, sortBy} from 'lodash';
import {LocalStorageService} from 'ngx-store';
import {RecipesService} from "./shared/recipes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dragulaService: DragulaService, localStorageService: LocalStorageService, recipeService: RecipesService) {
    const ingredientList = recipeService.ingredientList;

    if (!localStorageService.get('ingredients') ||
      !isEqual(sortBy(localStorageService.get('ingredients'), 'name'), sortBy(ingredientList.ingredients, 'name')))
      localStorageService.set('ingredients', ingredientList.ingredients);

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
