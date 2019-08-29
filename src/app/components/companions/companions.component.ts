import { Component, OnInit } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { CompanionService } from 'src/app/services/companionService/companion.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.css']
})
export class CompanionsComponent implements OnInit {

  companions: Companion[];  

  constructor(private companionService: CompanionService, private route: ActivatedRoute, private location: Location) { 

  }

  ngOnInit() {

    this.route.paramMap.subscribe( e => {

      console.log(e.get("name"));

      if( e.get("name") === null ) {

        this.getCompanions();

      } else {

        this.getCompanionByName(e.get("name"));

      }

    })

  }

  getCompanions(): void {

    this.companions = this.companionService.getCompanions();

  }

  getCompanionByName(name: string){

    let companion = this.companionService.getCompanionByName(name);

    let arr = [companion];

    this.companions = arr;

  }

  backButtonClick() {
    
    this.location.back();

  }

}
