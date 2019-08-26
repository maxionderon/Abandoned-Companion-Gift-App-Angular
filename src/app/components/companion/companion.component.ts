import { Component, OnInit, Input } from '@angular/core';
import { Companion } from 'src/app/model/companion';

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.css']
})
export class CompanionComponent implements OnInit {

  

  @Input() companion: Companion;
  dataSource;
  displayedColumns: string[] = ['type', 'reaction'];
  

  constructor() { 

    

  }

  ngOnInit() {

    this.dataSource = this.companion.gifts;

  }

}
