import { Component, OnInit, Input } from '@angular/core';
import { Companion } from 'src/app/model/companion';
import { Gift } from 'src/app/model/gift';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  @Input() companion: Companion;

  //checkbox Variables
  love = true;
  favorite = true;
  like = true;
  indifferent = true;


  name: string;
  dataSource: Gift[];
  displayedColumns: string[] = ['type', 'reaction'];
  activeTableSort: Sort;

  constructor() { 

    

  }

  ngOnInit() {

    this.dataSource = this.companion.gifts;
    this.name = this.companion.name;
    this.activeTableSort = { active: "", direction: "" };

  }

  loveChange() {
    
    if( this.love === true ) {

      //search for missing gifts
      let gifts = this.companion.gifts.filter( e => {

        return e.reaction === "Love";

      });

      //add gifts to datasource
      this.dataSource = this.dataSource.concat(gifts);

    } else {

      //remove gifts from datasource
      let gifts = this.dataSource.filter( e => {

        return e.reaction !== "Love";

      });

      //set array without gifts as datasource
      this.dataSource = gifts;

    }

    //sort Data if necessary
    this.checkActiveTableSort();
   
  }

  favoriteChange() {

    if( this.favorite === true ) {

      //search for missing gifts
      let gifts = this.companion.gifts.filter( e => {

        return e.reaction === "Favorite";

      });

      //add gifts to datasource
      this.dataSource = this.dataSource.concat(gifts);

    } else {

      //remove gifts from datasource
      let gifts = this.dataSource.filter( e => {

        return e.reaction !== "Favorite";

      });

      //set array without gifts as datasource
      this.dataSource = gifts;

    }

    //sort Data if necessary
    this.checkActiveTableSort();

  }

  likeChange() {

    if( this.like === true ) {

      //search for missing gifts
      let gifts = this.companion.gifts.filter( e => {

        return e.reaction === "Like";

      });

      //add gifts to datasource
      this.dataSource = this.dataSource.concat(gifts);

    } else {

      //remove gifts from datasource
      let gifts = this.dataSource.filter( e => {

        return e.reaction !== "Like";

      });

      //set array without gifts as datasource
      this.dataSource = gifts;

    }

    //sort Data if necessary
    this.checkActiveTableSort();

  }

  indifferentChange() {

    if( this.indifferent === true ) {

      //search for missing gifts
      let gifts = this.companion.gifts.filter( e => {

        return e.reaction === "Indifferent";

      });

      //add gifts to datasource
      this.dataSource = this.dataSource.concat(gifts);

    } else {

      //remove gifts from datasource
      let gifts = this.dataSource.filter( e => {

        return e.reaction !== "Indifferent";

      });

      //set array without gifts as datasource
      this.dataSource = gifts;

    }

    //sort Data if necessary
    this.checkActiveTableSort();

  }

  sortData(sort: Sort) {
    
    const data = this.dataSource.slice();

    if( sort.active === "reaction") {

      if(sort.direction === "asc" ) {

        this.dataSource = this.sortDataByReaction(data);

      }

      if(sort.direction === "desc" ) {

        this.dataSource = this.sortDataByReaction(data).reverse();

      }
    
    }

    if( sort.active === "type") {

      if(sort.direction === "asc" ) {

        this.dataSource = this.sortDataByType(data);

      }

      if(sort.direction === "desc" ) {

        this.dataSource = this.sortDataByType(data).reverse();

      }
    
    }

    this.activeTableSort = sort;

  }

  sortDataByType( data: Gift[] ) {

    return data.sort( (a, b) => (a.type < b.type ? -1 : 1) );

  }

  sortDataByReaction(data: Gift[]) {

    return data.sort(  (a,b) => {

      //a is Love
      if( a.reaction === "Love" ) {

        return this.sortLove(b);

      } 
      else      
      //a is Favorite
      if( a.reaction === "Favorite") {

        return this.sortFavorite(b)

      }
      else
      //a is Like
      if( a.reaction === "Like" ) {

        return this.sortLike(b);

      } else {

        return this.sortIndifferent(b);

      }

    });



  }

  sortLove( gift: Gift) {

    if( gift.reaction === "Love")  {

      return 0;

    }
    else
    if( gift.reaction === "Favorite")  {

      return -1;

    }
    else
    if( gift.reaction === "Like")  {

      return -1;

    }
    else {

      return -1;

    }
    
  }

  sortFavorite( gift: Gift) {

    if( gift.reaction === "Love")  {

      return 1;

    } else if( gift.reaction === "Favorite")  {

      return 0;

    } else if( gift.reaction === "Like")  {

      return -1;

    } else {

      return -1;

    }

  }

  sortLike( gift: Gift) {

    if( gift.reaction === "Love")  {

      return 1;

    } else if( gift.reaction === "Favorite")  {

      return 1;

    } else if( gift.reaction === "Like")  {

      return 0;

    } else {

      return -1;

    }

  }

  sortIndifferent( gift: Gift) {

    if( gift.reaction === "Love")  {

      return 1;

    } else if( gift.reaction === "Favorite")  {

      return 1;

    } else if( gift.reaction === "Like")  {

      return 1;

    } else {

      return 0;

    }

  }

  checkActiveTableSort() {

    const data = this.dataSource.slice();

    if( this.activeTableSort.active === "type" ) {

      if( this.activeTableSort.direction === "asc") {

        this.dataSource = this.sortDataByType(data);

      }

      if( this.activeTableSort.direction === "desc") {

        this.dataSource = this.sortDataByType(data).reverse();

      }

    }

    if( this.activeTableSort.active === "reaction" ) {

      if( this.activeTableSort.direction === "asc") {

        this.dataSource = this.sortDataByReaction(data);

      }

      if( this.activeTableSort.direction === "desc") {

        this.dataSource = this.sortDataByReaction(data).reverse();

      }

    }

  }

}
