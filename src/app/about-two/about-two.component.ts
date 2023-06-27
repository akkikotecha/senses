import { Component,AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-about-two',
  templateUrl: './about-two.component.html',
  styleUrls: ['./about-two.component.css'],
})
export class AboutTwoComponent implements AfterViewInit  {
  constructor(private route: ActivatedRoute) {}
 
  ngOnInit(): void {

    const paramValue = this.route.snapshot.paramMap.get('paramName');
    if (paramValue == 'whoWeAre') {
      setTimeout(() => {
        this.scroll();
      }, 1000);
    }
    // this.scroll();
    // const paramValue = this.route.snapshot.paramMap.get('paramName');
    // if (paramValue == 'whoWeAre') {
    //   console.log('paramValue', paramValue);
    //   const element = document.getElementById('whoWeAre'); // Replace 'sectionId' with the actual ID of the section you want to scroll to
    //   if (element) {
    //     element.scrollIntoView();
    //   }
    // }
    setTimeout(function () {
      $('.header-main').css({
        background: '#fff',
        border: '2px solid #ededed',
        padding: '9px 0px 11px 0px',
      });
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 200);
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.scroll();
    // }, 1000);
  }

  scroll() {
    const element = document.getElementById('whoWeAre');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
  
  
  

}
