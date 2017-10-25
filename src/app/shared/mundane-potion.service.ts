import {Injectable} from '@angular/core';
import {Potion} from "../model/potion";

@Injectable()
export class MundanePotionService {

  potion = new Potion({
    name: 'Mundane Potion',
    imageUrl: '',
    effect: () => console.log('Hello')
  });

  constructor() {
  }

}
