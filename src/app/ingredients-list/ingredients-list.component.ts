import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../model/ingredient';
import {LocalStorage} from 'ngx-store';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  @LocalStorage('ingredients') ingredients: Ingredient[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
