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
  ) { }
  resourceType: any = '';
  resourceSubType: any = '';
  resourceFilterTypeSubTypeData: any = '';
  isLoading: boolean = true;
  ngOnInit(): void {
    this.titleService.setTitle('Resources | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Resources | Senses Akustik',
    });
    // get data of sub menu

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
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
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

      $(".logo_style").attr("src", "./assets/SENSES LOGO.svg");
      $('.logo img').css({ 'max-width': '170px' });
    }, 1100);
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
  resourceTypeClickSub(id: any, name: any, parent_id: any): void {
    setTimeout(() => {
      localStorage.removeItem('resourceTypeIdSub');
      localStorage.removeItem('resourceTypeSub');
      localStorage.removeItem('resourceTypeId');
      localStorage.removeItem('fabrics_id');

      if (
        localStorage.getItem('resourceTypeIdSub') === '648b0c153b5871e6e15ed4a1'
      ) {
        localStorage.setItem('fabrics_id', id);
      }
      localStorage.setItem('fabrics_id', id);

      localStorage.setItem('resourceTypeId', parent_id);

      localStorage.setItem('resourceTypeIdSub', id);
      localStorage.setItem('ResourceTypeNameSub', name);

      // console.log(id)
      let routePath: string;

      switch (name) {
        case 'Products':
          routePath = '/resources-gallery/products';
          break;
        case 'BTS':
          routePath = '/resources-gallery/bts';
          break;
        case 'Projects':
          routePath = '/resources-gallery/projects';
          break;
        case 'Product Lookbooks':
          routePath = '/resources-documents/Lookbooks';
          break;
        case 'Tear Sheets':
          routePath = '/resources-documents/TearSheets';
          break;
        case 'Installation Manuals':
          routePath = '/resources-documents/InstallationManuals';
          break;
        case 'Other':
          routePath = '/resources-documents/others';

          break;
        case 'Fabrics':
          routePath = '/resources-materials/Fabrics';
          break;
        case 'Felts':
          routePath = '/resources-materials/Felts';
          break;
        case 'Colorline':
          routePath = '/resources-materials/Colorline';
          break;
        case 'CAD Files':
          routePath = '/resources-materials/CADFiles';
          break;
        case 'Others':
          routePath = '/resources-materials/others';
          break;
        case 'Certifications':
          routePath = '/resources-certifications/Certifications';
          break;
        case 'Reports':
          routePath = '/resources-certifications/Reports';
          break;
        case 'Awards':
          routePath = '/resources-certifications/Awards';
          break;
        case 'Materials':
          routePath = '/resources-materials';
          break;
        default:
          routePath = '/resources-certifications';
          break;
      }
      this.router.navigate([routePath]).then(() => {
        // window.location.reload();
      });
    }, 1000);
  }
}
