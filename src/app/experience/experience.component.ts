import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @ViewChild('header') headerText: ElementRef;

  xloc: any;
  headerCss = {
    '-webkit-transform': 'translateX(0)',
    '-moz-transform': 'translateX(0)',
    'transform': 'translateX(0)',
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.xloc = windowScroll / 2;
    this.headerCss = {
      '-webkit-transform': 'translateX(' + this.xloc +'px)',
      '-moz-transform': 'translateX(' + this.xloc + 'px)',
      'transform': 'translateX(' + this.xloc + 'px)'
    };
  };
}
