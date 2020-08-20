import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @ViewChild('experience-circle') experienceCircle: ElementRef;

  rotation: any;
  rotationCss = {
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    'transform': 'rotate(0deg)',
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.rotation = 270 + windowScroll / 3;
    this.rotationCss = {
      '-webkit-transform': 'rotate(' + this.rotation + 'deg)',
      '-moz-transform': 'rotate(' + this.rotation + 'deg)',
      'transform': 'rotate(' + this.rotation + 'deg)'
    };
  };
}
