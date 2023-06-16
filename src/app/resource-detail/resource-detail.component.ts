import { Component } from '@angular/core';
import { ResourceService } from './resource.service';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css'],
})
export class ResourceDetailComponent {
  constructor(private adminResource: ResourceService, private router: Router) {}
  resourceType: any = '';
  resourceSubType: any = '';
  resourceFilterTypeSubTypeData: any = '';
  ngOnInit(): void {
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

  resourceTypeClick(id: any, name: any): void {
    localStorage.removeItem('resourceTypeId');
    localStorage.removeItem('resourceType');

    localStorage.setItem('resourceTypeId', id);
    localStorage.setItem('productName', name);

    // console.log(id)
    this.router.navigate([name]).then(() => {
      // window.location.reload();
    });
  }
}
