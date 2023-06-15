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
  resourceImagesType: any = '';
  resourceDocumentsType: any = '';
  resourceMaterialsType: any = '';
  resourceCertificationsType: any = '';
  ngOnInit(): void {
    this.adminResource.getAllResourceType().subscribe((res: any) => {
      console.log(res);
      this.resourceType = JSON.parse(JSON.stringify(res));
      console.log('this.resourceType', this.resourceType);
    });
    this.adminResource.getAllResourceSubType().subscribe((res: any) => {
      console.log(res);
      this.resourceSubType = JSON.parse(JSON.stringify(res));
      console.log('this.resourceSubType', this.resourceSubType);
    });
    this.resourceType.data.forEach((resType: any) => {
      this.resourceSubType.data.forEach((resSubType: any) => {
        if (
          (resType._id =
            resSubType.resourceType && resType.title == 'Documents')
        ) {
          console.log('resSubType', resSubType);
          // Display or use the resSubType object as per your requirement
        }
      });
    });

    setTimeout(function () {
      console.log('HELLO');
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
