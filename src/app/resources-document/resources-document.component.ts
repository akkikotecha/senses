import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { ResourceDocumentService } from './resources-document.service';

@Component({
  selector: 'app-resources-document',
  templateUrl: './resources-document.component.html',
  styleUrls: ['./resources-document.component.css'],
})
export class ResourcesDocumentComponent {
  data: any = '';
  filterData: any = '';
  constructor(
    private lazyLoadService: LazyLoadingService,
    private resourceDocument: ResourceDocumentService
  ) {}
  ngOnInit(): void {
    this.resourceDocument.getResourceTypeData().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        console.log('JobsiteData', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.resourceDocument.getResourceSubTypeDataByTypeID().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.filterData = res; // Wrap the single object in an array
        console.log('JobsiteData', this.filterData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });

    setTimeout(() => {
      this.lazyLoadService
        .loadScript('../../assets/assets/table/resourcesGalley.js')
        .subscribe((_) => {
          //       setTimeout(function(){
          //         $('textarea[name="DSC"]').ckeditor();
          //         $('#editor').ckeditor();
          //       },2000)
          // // $('#btn').on('click', function(e) {
          // //   console.log('ckeditor content: ' + $('textarea[name="DSC"]').val());
          // // })
        });
    }, 1000);

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
  handleClick(id: string) {
    console.log('id', id);
    if (id === '') {
      this.resourceDocument.getResourceTypeData().subscribe((res) => {
        if (res && typeof res === 'object') {
          this.data = res; // Wrap the single object in an array
          console.log('JobsiteData', this.data);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      });
    } else {
      this.resourceDocument
        .getResourceImageDataBySubTypeID(id)
        .subscribe((res) => {
          if (res && typeof res === 'object') {
            this.data = res; // Wrap the single object in an array
            console.log('jobsiteData', this.data);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
    }
  }
}
