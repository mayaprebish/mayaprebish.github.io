import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('load', function() {
      // scroll into view
      // document.querySelector('.js-scroll-to-content').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('.content-container').scrollIntoView({ behavior: 'smooth' });
      // });

      // // scroll to bottom
      // document.querySelector('.js-scroll-to-bottom').addEventListener('click', function(e) {
      //   console.log("test");
      //   e.preventDefault();
      //   window.scrollTo({ top: document.body.clientHeight - window.innerHeight, left: 0, behavior: 'smooth' });
      // });
  
      // // scroll to top
      // document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
      // });
  
      // // scroll by
      // document.querySelector('.js-scroll-by').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
      // });
  
      // // scroll back
      // document.querySelector('.js-scroll-back').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   window.scrollBy({ top: -100, left: 0, behavior: 'smooth' });
      // });
  
      // // scroll into view
      // document.querySelector('.js-scroll-into-hello').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });
      // });
  
      // // element scroll to
      // document.querySelector('.scrollable-element-to-top').scrollTop = 10000;
  
      // document.querySelector('.js-element-scroll-to-top').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('.scrollable-element-to-top').scroll({ top: 0, left: 0, behavior: 'smooth' });
      // });
  
      // // element scroll by
      // document.querySelector('.js-element-scroll-by').addEventListener('click', function(e) {
      //   e.preventDefault();
      //   document.querySelector('.scrollable-element-by').scrollBy({ top: 100, left: 0, behavior: 'smooth' });
      // });
    });
    }
}
