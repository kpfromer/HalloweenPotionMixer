import {Injectable} from '@angular/core';
import {Potion} from '../model/potion';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class NewPotionService {

  private newPotionSource = new ReplaySubject<Potion>();
  newPotion = this.newPotionSource.asObservable();

  constructor() {
  }

  createNewPotion(potion: Potion) {
    this.newPotionSource.next(potion);
  }

}
