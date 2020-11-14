import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDetails } from '../card';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  closeResult: string;

  cards: CardDetails[] = [
    {title: 'e-waste', description: 'For a public writing assignment, I created a responsive mobile-friendly infographic to share information my teammates and I gathered about the disposal of electronic waste. Looks best on mobile but can be viewed on desktop as well.', tools: 'Angular 9', categories: ['FE'], imgUrl: '../../assets/ewaste-preview.PNG'}
  ]

  constructor(private modalService: NgbModal) {}

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
