import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.less']
})
export class PanelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards = [
    { title: 'Card 1', cols: 3, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

}
