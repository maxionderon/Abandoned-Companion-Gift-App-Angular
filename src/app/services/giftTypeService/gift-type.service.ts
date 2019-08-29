import { Injectable } from '@angular/core';
import { GIFTTYPS } from 'src/app/mock-gift-types';

@Injectable({
  providedIn: 'root'
})
export class GiftTypeService {

  constructor() { }

  getGiftTypes() {

    return GIFTTYPS;

  }

  getGiftTypeByType(type: string) {

    for( let i = 0; i !== GIFTTYPS.length; i = i + 1 ) {

      if( GIFTTYPS[i] === type ) {

        return GIFTTYPS[i];

      }

    }

  }

}
