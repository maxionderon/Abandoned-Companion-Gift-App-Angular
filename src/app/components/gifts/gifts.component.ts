import { Component, OnInit } from '@angular/core';
import { GiftTypeService } from 'src/app/services/giftTypeService/gift-type.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  giftTypes: string[];

  constructor(private giftTypeService: GiftTypeService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe( e => {

      if( e.get("type") === null) {

        this.giftTypes = this.getGiftTypes();

      } else {

        this.giftTypes = this.getGiftTypeByType(e.get("type"));

        if(this.giftTypes[0] === undefined ) {

          this.giftTypes = this.getGiftTypes();

        }

      }

    });

    
  }

  getGiftTypes() {

    return this.giftTypeService.getGiftTypes();

  }

  getGiftTypeByType(type: string) {

    return [this.giftTypeService.getGiftTypeByType(type)];

  }

  backButtonClick() {
    
    this.location.back();

  }

}
