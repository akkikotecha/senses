import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-termsofuser',
  templateUrl: './termsofuser.component.html',
  styleUrls: ['./termsofuser.component.css'],
})
export class TermsofuserComponent {
  constructor(private meta: Meta, private titleService: Title) { }
  ngOnInit(): void {
    this.titleService.setTitle('Terms of Use | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Products | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Go through our legal terms and conditions before placing an order, interacting with our website or engaging with our resources.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Go through our legal terms and conditions before placing an order, interacting with our website or engaging with our resources.',
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
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 200);
  }
}
