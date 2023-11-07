import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  constructor(
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) { }
  ngOnInit(): void {
    this.titleService.setTitle('Frequently Asked Questions | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Frequently Asked Questions | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Go through our list of frequently asked questions to know more about our products and services. If you are still stuck, drop us an email.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Go through our list of frequently asked questions to know more about our products and services. If you are still stuck, drop us an email.',
    });
    // var loc = window.location;

    // if(loc.pathname == "/products")
    // {
    //   data_description = "Upgrade your office with our booths and pods designed for private conversations and meetings. Meticulously crafted with high-quality materials, our collection offers versatile and functional solutions that seamlessly blend style and functionality. "
    // }

    setTimeout(function () {
      if (window.matchMedia("(max-width: 767px)").matches) {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 1px 0px",
        });
      } else {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 20px 0px",
        });
      }
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 2000);
  }

  project_case(): void {
    this.router.navigate(['insights']).then(() => {
      // window.location.reload();
      localStorage.setItem('project_case', 'project_case');
      if (localStorage.getItem('project_case') == 'project_case') {
        setTimeout(() => {
          this.project_casescroll();
        }, 1000);
      }
    });
  }

  project_casescroll() {
    const element = document.getElementById('project_case');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('project_case', '');
    }
  }
  DealerFunction() {
    const baseUrl = '/about-us'; // Replace with your base URL
    const fragment = 'whoWeAre'; // Replace with your fragment identifier
    const url = baseUrl + '/' + fragment;
    window.open(url, '_blank');
  }
  handleDownloadSection() {
    localStorage.setItem('resourceTypeId', '6489ac193b5871e6e15ed0a2');
    window.open('/resources_document', '_blank');
  }
}
