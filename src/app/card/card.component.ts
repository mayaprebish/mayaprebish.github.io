import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails: CardDetails;

  constructor() {
  }

  ngOnInit(): void {
  }

}
