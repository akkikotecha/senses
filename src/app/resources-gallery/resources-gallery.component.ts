import { Component } from '@angular/core';
declare var $: any;
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { LazyLoadingService } from './lazy-loading.service';
import { ResourceGalleryService } from './resources-gallery.service';
@Component({
  selector: 'app-resources-gallery',
  templateUrl: './resources-gallery.component.html',
  styleUrls: ['./resources-gallery.component.css'],
})
export class ResourcesGalleryComponent {
  data: any = '';
  filterData: any = '';
  disableSidebarContent: any = false;
  filterResourceData: any = '';
  categoryData: any = '';
  subCategoryData: any = '';
  categorySelectedId: any = '';
  subCategorySelectedId: any = '';
  selectedFiles: any[] = [];
  count: number = 0;
  constructor(
    private lazyLoadService: LazyLoadingService,
    private resourceGallery: ResourceGalleryService
  ) {}
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
    this.resourceGallery.getResourceTypeData().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array
        console.log('ResourceTypeData', this.data);
        console.log('filterResourceData', this.filterResourceData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.resourceGallery.getResourceSubTypeDataByTypeID().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.filterData = res; // Wrap the single object in an array
        console.log('JobsiteData2', this.filterData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });

    this.resourceGallery.getAllCategory().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.categoryData = res; // Wrap the single object in an array

        console.log('categoryData', this.categoryData);
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
      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 2000);
  }
  handleClick(id: string, title: string) {
    console.log('id', id);

    if (id === '') {
      // this.resourceDocument.getResourceTypeData().subscribe((res) => {
      //   if (res && typeof res === 'object') {
      // this.data = res;
      this.disableSidebarContent = false;

      this.filterResourceData = this.data.data; // Wrap the single object in an array
      // Wrap the single object in an array
      console.log('JobsiteData', this.data);
      //   } else {
      //     console.error('Invalid response data: expected a single object');
      //   }
      // });
    } else if (
      id == '648b0ba83b5871e6e15ed48d' ||
      id == '648b0bb23b5871e6e15ed491'
    ) {
      this.disableSidebarContent = true;
      this.resourceGallery.getResourceTypeData().subscribe((res) => {
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
  handleChange(event: any) {
    const selectedValue = event?.target?.value;
    if (selectedValue) {
      // Function logic here
      console.log('Selected value:', selectedValue);
      this.resourceGallery.getAllSubCategory(selectedValue).subscribe((res) => {
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
      this.resourceGallery
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
      this.resourceGallery
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
    this.resourceGallery.getResourceTypeData().subscribe((res) => {
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
}
