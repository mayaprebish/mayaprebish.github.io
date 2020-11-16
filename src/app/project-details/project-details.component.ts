import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from '../card';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project: CardDetails;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('load', function() {
      //scroll contact into view
      document.querySelector('.js-scroll-to-contact').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
      })});
  }

}
