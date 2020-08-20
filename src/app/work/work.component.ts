import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @ViewChild('work-circle') workCircle: ElementRef;

  rotation: any;
  rotationCss = {
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    'transform': 'rotate(0deg)',
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.rotation = 0 + windowScroll / 3;
    this.rotationCss = {
      '-webkit-transform': 'rotate(' + this.rotation + 'deg)',
      '-moz-transform': 'rotate(' + this.rotation + 'deg)',
      'transform': 'rotate(' + this.rotation + 'deg)'
    };
  };
}
