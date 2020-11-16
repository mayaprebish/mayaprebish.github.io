import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDetails } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails: CardDetails;
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  openDetails(details) {
    this.modalService.open(details, { scrollable: true });
  }

  ngOnInit(): void {
  }

}
