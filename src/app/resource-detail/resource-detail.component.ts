import { Component } from '@angular/core';
import { ResourceService } from './resource.service';
declare var $: any;
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css'],
})
export class ResourceDetailComponent {
  constructor(
    private adminResource: ResourceService,
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {}
  resourceType: any = '';
  resourceSubType: any = '';
  resourceFilterTypeSubTypeData: any = '';
  ngOnInit(): void {
    this.titleService.setTitle('Resources | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Resources | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Download reports, brochures, spec sheets, swatch cards and other important product documents. Contact us to know more about our products and services.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Download reports, brochures, spec sheets, swatch cards and other important product documents. Contact us to know more about our products and services.',
    });
    this.adminResource.getAllResourceType().subscribe((res: any) => {
      this.resourceType = JSON.parse(JSON.stringify(res));
      // Insert the removed element at the beginning of the array
      const secondPositionData = this.resourceType.data.splice(1, 1); // Remove the element at index 1 and store it
      console.log(secondPositionData);
      this.resourceType.data.unshift(secondPositionData[0]);
      console.log('After Filter Data', this.resourceType);
    });
    this.adminResource.getAllResourceSubType().subscribe((res: any) => {
      this.resourceSubType = JSON.parse(JSON.stringify(res));
    });
    this.adminResource.getAllResourceTypeSubTypeData().subscribe((res: any) => {
      this.resourceFilterTypeSubTypeData = JSON.parse(JSON.stringify(res));
      const secondPositionData = this.resourceFilterTypeSubTypeData.data.splice(
        1,
        1
      ); // Remove the element at index 1 and store it
      console.log(secondPositionData);
      this.resourceFilterTypeSubTypeData.data.unshift(secondPositionData[0]);
    });
    const array = [1, 2, 3, 4, 5];

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
    }, 2000);
  }
  activeIndex = 0; // Initially set the first accordion item as active

  toggleAccordion(index: number) {
    this.activeIndex = index === this.activeIndex ? -1 : index;
  }
  resourceTypeClick(id: any, name: any): void {
    console.log('resourceTypeClick', id);
    setTimeout(() => {
      localStorage.removeItem('resourceTypeId');
      localStorage.removeItem('resourceType');

      localStorage.setItem('resourceTypeId', id);
      localStorage.setItem('ResourceTypeName', name);
      // console.log(id)
      this.router.navigate([name]).then(() => {
        // window.location.reload();
      });
    }, 1000);
  }
}
