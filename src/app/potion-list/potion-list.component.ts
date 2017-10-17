import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-store';
import {NewPotionService} from '../shared/new-potion.service';
import {Potion} from '../model/potion';

@Component({
  selector: 'app-potion-list',
  templateUrl: './potion-list.component.html',
  styleUrls: ['./potion-list.component.css']
})
export class PotionListComponent implements OnInit {

  @LocalStorage() potions: Potion[] = [];

  constructor(private potionService: NewPotionService) {
    this.potionService.newPotion.subscribe(newPotion => {
      if (this.potions.filter(potion => potion.name === newPotion.name).length === 0)
        this.potions.push(newPotion);
    });
  }

  ngOnInit() {
    console.log(this.potions);
  }

}
