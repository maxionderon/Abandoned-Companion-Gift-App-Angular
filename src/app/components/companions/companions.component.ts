import { Component, OnInit } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { CompanionService } from 'src/app/services/companionService/companion.service';

@Component({
  selector: 'app-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.css']
})
export class CompanionsComponent implements OnInit {

  companions: Companion[];  

  constructor(private companionService: CompanionService) { 

    

  }

  ngOnInit() {

    this.getCompanions();

  }

  getCompanions(): void {

    this.companions = this.companionService.getCompanions();

  }

}
