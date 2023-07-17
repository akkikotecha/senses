import { Component, ViewChild } from '@angular/core';
declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { ResourceDocumentService } from './resources-document.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-resources-document',
  templateUrl: './resources-document.component.html',
  styleUrls: ['./resources-document.component.css'],
})
export class ResourcesDocumentComponent {
  @ViewChild('categorySelect') categorySelect: any;
  data: any = '';
  handleCommonData: boolean = true;
  filterData: any = '';
  filterResourceData: any = '';
  categoryData: any = '';
  subCategoryData: any = '';
  categorySelectedId: any = '';
  subCategorySelectedId: any = '';
  disableSidebarContent: any = '';
  fabrics_id: any = '';
  constructor(
    private lazyLoadService: LazyLoadingService,
    private resourceDocument: ResourceDocumentService
  ) {}
  selectedFiles: any[] = [];
  commonOtherData: any[] = [];
  count: number = 0;
  catAData: any[] = [];
  catBData: any[] = [];
  catCData: any[] = [];

  // selectedFiles: any[] = [];

  onFileSelect(event: any, document: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.count = this.count + 1;
      this.selectedFiles.push(document);
    } else {
      const index = this.selectedFiles.findIndex((file) => file === document);
      if (index !== -1) {
        this.count = this.count - 1;

        this.selectedFiles.splice(index, 1);
      }
    }
  }

  async downloadFiles() {
    const zip = new JSZip();

    for (let i = 0; i < this.selectedFiles.length; i++) {
      const document = this.selectedFiles[i];
      const blob = await this.fetchBlob(document.image);
      const fileExtension = document.image.split('.').pop(); // Get the file extension
      const filename = `file${i + 1}.${fileExtension}`; // Append the file extension to the filename
      zip.file(filename, blob);
    }

    zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
      const currentDate = new Date();
      const dateString = currentDate.toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
      const timeString = currentDate
        .toTimeString()
        .slice(0, 8)
        .replace(/:/g, ''); // Get current time in HHMMSS format
      const filename = `files_${dateString}_${timeString}.zip`; // Add current date and time to the zip file name
      saveAs(content, filename);
    });
  }

  fetchBlob(url: string): Promise<Blob> {
    const correctedUrl = 'assets/' + url; // Add 'assets/' prefix to the URL

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', correctedUrl);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(`Failed to fetch blob from URL: ${correctedUrl}`));
        }
      };
      xhr.onerror = () => {
        reject(new Error(`Failed to fetch blob from URL: ${correctedUrl}`));
      };
      xhr.send();
    });
  }
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
            this.filterResourceData = this.data.data.filter((res: any) => {
              console.log('filterResourceData', res);
              return res._id != '649c024077e6aa32c9f114f8';
            }); // Wrap the single object in an array
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
      // console.log('HELLO');
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
      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });

      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 2000);
    this.resourceDocument
      .getResourceParticularData('649c024077e6aa32c9f114f8')
      .subscribe((res) => {
        if (res && typeof res === 'object') {
          this.data = res; // Wrap the single object in an array
          this.commonOtherData = this.data.data; // Wrap the single object in an array
          console.log('commonOtherData', this.data.data);
          // console.log('commonDataTest', this.Data);

          // console.log("shuffledArray " +shuffledArray);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      });
  }
  handleClick(id: string) {
    this.fabrics_id = id;
    console.log('id', id);

    if (id === '') {
      this.disableSidebarContent = false;

      // this.resourceDocument.getResourceTypeData().subscribe((res) => {
      //   if (res && typeof res === 'object') {
      // this.data = res;
      this.filterResourceData = this.data.data.filter((res: any) => {
        console.log('filterResourceData', res);
        return res.title != 'Care & Maintenance Guide';
      }); // Wrap the single object in an array
      // Wrap the single object in an array
      console.log('JobsiteData', this.data);
      //   } else {
      //     console.error('Invalid response data: expected a single object');
      //   }
      // });
    } else if (id == '648b0c153b5871e6e15ed4a1') {
      this.disableSidebarContent = true;
      this.catAData = this.data.data.filter((res: any) => {
        if (res.fabricsType == 'catA') {
          console.log(res);
          return res;
        }
      });
      this.catBData = this.data.data.filter((res: any) => {
        if (res.fabricsType == 'catB') {
          console.log(res);
          return res;
        }
      });
      this.catCData = this.data.data.filter((res: any) => {
        if (res.fabricsType == 'catC') {
          console.log(res);
          return res;
        }
      });
      console.log('CatA', this.catAData);
      console.log('CatB', this.catBData);
      console.log('CatC', this.catCData);
    } else if (
      id == '648b0bdd3b5871e6e15ed495' ||
      id == '649c015577e6aa32c9f114e7' ||
      id == '648b0c343b5871e6e15ed4a9' ||
      id == '648b0c213b5871e6e15ed4a5' ||
      id == '648b0bf63b5871e6e15ed49d'
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
            this.filterResourceData = this.data.data.filter((res: any) => {
              console.log('filterResourceData', res);
              return res._id != '649c024077e6aa32c9f114f8';
            });

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
    console.log('I am click or not');
    this.resourceDocument
      .getResourceTypeData(localStorage.getItem('resourceTypeId'))
      .subscribe((res) => {
        if (res && typeof res === 'object') {
          const categorySelect = document.getElementById(
            'categoryID'
          ) as HTMLSelectElement;
          const subCategorySelect = document.getElementById(
            'subCategoryID'
          ) as HTMLSelectElement;
          categorySelect.value = '';
          subCategorySelect.value = '';
          this.data = res; // Wrap the single object in an array
          this.filterResourceData = this.data.data; // Wrap the single object in an array
          console.log('ResourceTypeDataReset', this.data);
          console.log('filterResourceDataReset', this.filterResourceData);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      });
  }
  handleAllData() {
    this.handleCommonData = true;
  }
  handleAllCommonData() {
    this.handleCommonData = false;
  }
}
