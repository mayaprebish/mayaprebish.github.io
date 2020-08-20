import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('about-circle') aboutCircle: ElementRef;

  rotation: any;
  rotationCss = {
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    'transform': 'rotate(0deg)',
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.rotation = 140 + windowScroll / 3;
    this.rotationCss = {
      '-webkit-transform': 'rotate(' + this.rotation + 'deg)',
      '-moz-transform': 'rotate(' + this.rotation + 'deg)',
      'transform': 'rotate(' + this.rotation + 'deg)'
    };
  };
}
