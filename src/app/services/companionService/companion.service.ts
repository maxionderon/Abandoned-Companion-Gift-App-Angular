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

}
