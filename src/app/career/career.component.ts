import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent {
  constructor(private meta: Meta, private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle(
      'Join our team of passionate thinkers and makers driving well-being at work. Discover open positions. '
    );
    this.meta.updateTag({
      property: 'og:title',
      content:
        'Join our team of passionate thinkers and makers driving well-being at work. Discover open positions. ',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Create a harmonious soundscape with our collection of acoustics and agile furniture solutions. Enhances productivity and focus in a dynamic workspace.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Create a harmonious soundscape with our collection of acoustics and agile furniture solutions. Enhances productivity and focus in a dynamic workspace.',
    });
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
    }, 200);
  }
}
