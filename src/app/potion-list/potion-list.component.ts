import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-store';
import {NewPotionService} from '../shared/new-potion.service';
import {Potion} from '../model/potion';
import {RecipesService} from "../shared/recipes.service";
import {MundanePotionService} from "../shared/mundane-potion.service";

@Component({
  selector: 'app-potion-list',
  templateUrl: './potion-list.component.html',
  styleUrls: ['./potion-list.component.css']
})
export class PotionListComponent implements OnInit {

  @LocalStorage() potions: Potion[] = [];

  click(potion: Potion) {
    const realPotion = this.recipeService.potionRecipes.find(potionItem => potionItem.name === potion.name);
    if (realPotion)
      realPotion.effect();
    else
      this.mundanePotion.potion.effect();
  }

  constructor(private potionService: NewPotionService, private recipeService: RecipesService, private mundanePotion: MundanePotionService) {
    this.potionService.newPotion.subscribe(newPotion => this.potions.push(newPotion));
  }

  ngOnInit() {
  }

}
