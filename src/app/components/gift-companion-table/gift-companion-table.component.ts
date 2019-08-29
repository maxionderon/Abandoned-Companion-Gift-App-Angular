import { Component, OnInit, Input } from '@angular/core';
import { Companion } from 'src/app/model/companion';

@Component({
  selector: 'app-gift-companion-table',
  templateUrl: './gift-companion-table.component.html',
  styleUrls: ['./gift-companion-table.component.css']
})
export class GiftCompanionTableComponent implements OnInit {

  @Input() companions: Companion[];

  dataSource: Companion[];
  displayedColumns: string[] = ['name'];
  //activeTableSort: Sort;

  constructor() { }

  ngOnInit() {

    this.dataSource = this.companions;

  }

}
