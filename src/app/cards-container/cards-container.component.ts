import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from '../card';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  @Input() cards: CardDetails[];

  constructor() { }

  ngOnInit(): void {
  }

}
