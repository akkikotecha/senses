import { Component } from '@angular/core';
import { ResourceService } from './resource.service';
declare var $: any;

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent {
  constructor(private adminResource: ResourceService) {}
  resourceType: any = '';
  ngOnInit(): void {
    this.adminResource.getAllResourceType().subscribe((res: any) => {
      console.log(res);
      this.resourceType = JSON.parse(JSON.stringify(res));
      console.log(this.resourceType);
    });
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
    }, 200);
  }
}
