import { Component, OnInit, Input } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { CompanionService } from 'src/app/services/companionService/companion.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {

  @Input() giftType: string;
  loveCompanions: Companion[];
  favoriteCompanions: Companion[];
  likeCompanions: Companion[];
  indifferentCompanions: Companion[];

  constructor(private companionService: CompanionService) { }

  ngOnInit() {
    this.loveCompanions = [];
    this.favoriteCompanions = [];
    this.likeCompanions = [];
    this.indifferentCompanions = [];

    this.fillContainer();

  }

  fillContainer() {

    let companions = this.companionService.getCompanions().slice();

    for( let i = 0; i !== companions.length; i = i + 1) {

      let gifts = companions[i].gifts;

      for( let k = 0; k !== gifts.length; k = k + 1) {

        if( gifts[k].type === this.giftType ) {

          if( gifts[k].reaction === "Love" ) {

            this.loveCompanions.push(companions[i]);

          }

          if( gifts[k].reaction === "Favorite" ) {

            this.favoriteCompanions.push(companions[i]);

          }

          if( gifts[k].reaction === "Like" ) {

            this.likeCompanions.push(companions[i]);

          }

          if( gifts[k].reaction === "Indifferent" ) {

            this.indifferentCompanions.push(companions[i]);

          }

        }

      }      

    }



  }

}
