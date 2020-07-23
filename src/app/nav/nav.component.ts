import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('stickyNav') navElement: ElementRef;

  sticky: boolean = false;
  navPosition: any;
  ngAfterViewInit(){
    this.navPosition = this.navElement.nativeElement.offsetTop
  }

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.navPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {
    window.addEventListener('load', function() {
      // scroll into view
      document.querySelector('.js-scroll-to-content1').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.content1').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelector('.js-scroll-to-content2').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.content2').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelector('.js-scroll-to-content3').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.content3').scrollIntoView({ behavior: 'smooth' });
      });

      document.querySelector('.js-scroll-to-content4').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.content4').scrollIntoView({ behavior: 'smooth' });
      });
  
      // // scroll to top
      // document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
      // });
    });
  }

}
