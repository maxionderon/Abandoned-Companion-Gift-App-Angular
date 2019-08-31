import { Component, OnInit } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { CompanionService } from 'src/app/services/companionService/companion.service';
import { ActivatedRoute, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.css']
})
export class CompanionsComponent implements OnInit {

  companions: Companion[];  
  

  constructor( private companionService: CompanionService, private route: ActivatedRoute, private location: Location ) {
  
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe( e => {      

      if( e.get("name") === null ) {

        this.getCompanions();

      } else {

        this.getCompanionByName(e.get("name"));

        if(this.companions[0] === undefined ) {

          this.getCompanions();

        }

      }      

    });    

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
