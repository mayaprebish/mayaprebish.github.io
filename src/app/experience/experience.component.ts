import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @ViewChild('experience-sample') headerText: ElementRef;

  xloc: any;
  sampleCss = {
    '-webkit-transform': 'translateX(0)',
    '-moz-transform': 'translateX(0)',
    'transform': 'translateX(0)',
  }
}
