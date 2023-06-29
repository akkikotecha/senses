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
  filterResourceData: any = '';
  categoryData: any = '';
  subCategoryData: any = '';
  categorySelectedId: any = '';
  subCategorySelectedId: any = '';
  disableSidebarContent: any = '';
  constructor(
    private lazyLoadService: LazyLoadingService,
    private resourceDocument: ResourceDocumentService
  ) {}
  ngOnInit(): void {
    console.log('categorySelectedId', this.categorySelectedId);

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
      this.resourceDocument
        .getResourceTypeData(localStorage.getItem('resourceTypeId'))
        .subscribe((res) => {
          this.data = null;
          if (res && typeof res === 'object') {
            this.data = res; // Wrap the single object in an array
            this.filterResourceData = this.data.data; // Wrap the single object in an array
            console.log('ResourceTypeData', this.data);
            console.log('filterResourceData', this.filterResourceData);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
      this.resourceDocument
        .getResourceSubTypeDataByTypeID(localStorage.getItem('resourceTypeId'))
        .subscribe((res) => {
          this.filterData = null;

          if (res && typeof res === 'object') {
            this.filterData = res; // Wrap the single object in an array
            console.log('JobsiteData2', this.filterData);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });

      this.resourceDocument.getAllCategory().subscribe((res) => {
        this.categoryData = null;

        if (res && typeof res === 'object') {
          this.categoryData = res; // Wrap the single object in an array

          console.log('categoryData', this.categoryData);
        } else {
          console.error('Invalid response data: expected a single object');
        }
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
      this.disableSidebarContent = false;

      // this.resourceDocument.getResourceTypeData().subscribe((res) => {
      //   if (res && typeof res === 'object') {
      // this.data = res;
      this.filterResourceData = this.data.data; // Wrap the single object in an array
      // Wrap the single object in an array
      console.log('JobsiteData', this.data);
      //   } else {
      //     console.error('Invalid response data: expected a single object');
      //   }
      // });
    } else if (
      id == '648b0bdd3b5871e6e15ed495'
      // ||
      // id == '648b0bb23b5871e6e15ed491'
    ) {
      this.disableSidebarContent = true;
      this.resourceDocument
        .getResourceTypeData(localStorage.getItem('resourceTypeId'))
        .subscribe((res) => {
          if (res && typeof res === 'object') {
            this.data = res; // Wrap the single object in an array
            this.filterResourceData = this.data.data; // Wrap the single object in an array

            console.log('handleClick id', id);
            this.filterResourceData = this.filterResourceData.filter(
              (res: any) => {
                if (res.resourceSubType == id) {
                  console.log(res);
                  return res;
                }
              }
            );
            console.log('this.data', this.data);
            console.log('this.filterResourceData', this.filterResourceData);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
    } else {
      this.disableSidebarContent = false;

      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == id) {
          console.log(res);
          return res;
        }
      });
      console.log('this.data', this.data);
      console.log('this.filterResourceData', this.filterResourceData);
    }
  }
  // Inside your Angular component
  handleChange(event: any) {
    const selectedValue = event?.target?.value;
    if (selectedValue) {
      // Function logic here
      console.log('Selected value:', selectedValue);
      this.resourceDocument
        .getAllSubCategory(selectedValue)
        .subscribe((res) => {
          if (res && typeof res === 'object') {
            this.subCategoryData = res; // Wrap the single object in an array

            console.log('subCategoryData', this.subCategoryData);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
      // Additional code you want to execute
    }
  }
  handleFormSubmit() {
    this.categorySelectedId = $('#categoryID option:selected').val();
    this.subCategorySelectedId = $('#subCategoryID option:selected').val();

    if (this.categorySelectedId && this.subCategorySelectedId) {
      this.resourceDocument
        .getAllResourceDataByFilter(
          this.categorySelectedId,
          this.subCategorySelectedId,
          localStorage.getItem('resourceTypeId')
        )
        .subscribe((res) => {
          if (res && typeof res === 'object') {
            this.data = res; // Wrap the single object in an array
            this.filterResourceData = this.data.data; // Wrap the single object in an array

            console.log('filterResourceData', this.data);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
    } else {
      this.resourceDocument
        .getAllResourceDataByCategoryFilter(
          this.categorySelectedId,

          localStorage.getItem('resourceTypeId')
        )
        .subscribe((res) => {
          if (res && typeof res === 'object') {
            this.data = res; // Wrap the single object in an array
            this.filterResourceData = this.data.data; // Wrap the single object in an array

            console.log('filterResourceData', this.data);
          } else {
            console.error('Invalid response data: expected a single object');
          }
        });
    }
    console.log(this.categorySelectedId);
    console.log(this.subCategorySelectedId);
    console.log('categoryID');
    console.log('categoryID');
  }
  handleResetButton() {
    this.resourceDocument
      .getResourceTypeData(localStorage.getItem('resourceTypeId'))
      .subscribe((res) => {
        if (res && typeof res === 'object') {
          this.data = res; // Wrap the single object in an array
          this.filterResourceData = this.data.data; // Wrap the single object in an array
          console.log('ResourceTypeDataReset', this.data);
          console.log('filterResourceDataReset', this.filterResourceData);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      });
  }
}
