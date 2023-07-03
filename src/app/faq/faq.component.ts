import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  constructor(private meta: Meta, private titleService: Title) {}
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
}
