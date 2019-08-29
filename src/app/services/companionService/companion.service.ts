import { Injectable } from '@angular/core';
import { Companion } from '../../model/companion';
import { COMPANIONS } from '../../mock-companions';


@Injectable({
  providedIn: 'root'
})
export class CompanionService {

  constructor() { }

  getCompanions(): Companion[] {

    return COMPANIONS;
    

  }

  getCompanionByName(name: string): Companion {

    for( let i = 0 ; i != COMPANIONS.length ; i = i + 1 ) {

      if( COMPANIONS[i].name === name ) {

        return COMPANIONS[i];

      }

    }

  }

}
