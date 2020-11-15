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

  selectedCards: CardDetails[];

  ngOnInit(): void {
    this.selectedCards = this.cards;
  }

  selectAll() {
    this.selectedCards = this.cards;
  }

  select(c: string) {
    this.selectedCards = [];
    for (let card of this.cards) {
      for (let category of card.categories) {
        if (category === c) {
          this.selectedCards.push(card);
        }
      }
    }
  }
  
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

  cards: CardDetails[] = [
    {title: 'e-waste', description: 'For a public writing assignment, I created a responsive mobile-friendly infographic to share information my teammates and I gathered about the disposal of electronic waste. Looks best on mobile but can be viewed on desktop as well.', tools: 'Angular 9', categories: ['FE'], imgUrl: '../../assets/ewaste-preview.PNG'},
    {title: 'e-waste', description: 'For a public writing assignment, I created a responsive mobile-friendly infographic to share information my teammates and I gathered about the disposal of electronic waste. Looks best on mobile but can be viewed on desktop as well.', tools: 'Angular 9', categories: ['FE'], imgUrl: '../../assets/ewaste-preview.PNG'},
    {title: 'e-waste', description: 'For a public writing assignment, I created a responsive mobile-friendly infographic to share information my teammates and I gathered about the disposal of electronic waste. Looks best on mobile but can be viewed on desktop as well.', tools: 'Angular 9', categories: ['FE'], imgUrl: '../../assets/ewaste-preview.PNG'},

    {title: 'PluggedIn', description: 'PluggedIn is a sample full-stack web application that I created for my Web Development course.', tools: 'React.js, Redux.js, Spring Boot, HTML, CSS, Heroku, ClearDB', categories: ['FS'], imgUrl: ''}
  ]

}
