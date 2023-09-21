import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-career-new',
  templateUrl: './career-new.component.html',
  styleUrls: ['./career-new.component.css']
})
export class CareerNewComponent {
  constructor() { }
  resourceType: any = '';
  ngOnInit(): void {

    setTimeout(function () {
      $('.header-main').css({
        background: '#fff',
        border: '2px solid #ededed',
        padding: '9px 0px 11px 0px',
      });
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.logo img').css({ 'max-width': '170px' });
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 2000);
  }
}
