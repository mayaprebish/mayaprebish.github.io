import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('skillsChart') skillsChart: ElementRef
  inView: boolean = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    if (this.skillsChart.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
  } else {
    this.inView = false;
  }
  };
}
