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
    {title: 'E-Waste', description: 'A mobile-friendly infographic I created for a public writing assignment on the disposal of electronic waste. Looks best on mobile but can be viewed on desktop as well.', tools: 'Angular 9', categories: ['FE'], imgUrl: '../../assets/ewaste-preview.PNG', linkText: 'open site', link: 'https://mayaprebish.github.io/ewaste'},

    {title: 'PluggedIn', description: 'A simple full-stack web application that I created for my Web Development course in Fall 2019.', tools: 'React.js, Redux.js, Java, Spring Boot, REST', categories: ['FS'], imgUrl: '../../assets/pluggedin.png', linkText: 'details', link: 'pluggedInDetails'},

    {title: 'Minesweeper', description: 'A replica of Minesweeper I created for Fundamentals of Computer Science II.', tools: 'Java', categories: ['S'], imgUrl: '../../assets/minesweeper.gif', linkText: 'details', link: 'minesweeperDetails'},

    {title: 'Bullets', description: 'A small game I created for Fundamentals of CS II in order to practice linked-list structures and dynamic dispatch.', tools: 'Java', categories: ['S'], imgUrl: '../../assets/bullets.gif', linkText: 'details', link: 'bulletsDetails'},

    {title: 'ExCellence', description: 'A simple Java application created using the MVC structure to produce and edit simple animations made using specially formatted text files.', tools: 'Java', categories: ['S'], imgUrl: '../../assets/excellence.gif', linkText: 'details', link: 'excellenceDetails'},

    
    {title: 'DNDSite', description: 'A fun little site I made for my friends and I to keep track of initiative rolls and store art made during our Dungeons & Dragons campaigns.', tools: 'Angular, Angular MATERIAL', categories: ['FE'], imgUrl: '../../assets/taro.png', linkText: 'open site', link: 'https://mayaprebish.github.io/dndsite'},

    {title: 'Lizard Tracker', description: 'A MATLAB program used to visualize movement of test specimens over time in 3D.', tools: 'MATLAB', categories: ['S'], imgUrl: '../../assets/MATLAB.gif', linkText: 'details', link: 'lizardDetails'},
  ]

}
