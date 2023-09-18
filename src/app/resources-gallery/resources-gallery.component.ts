import { Component, ViewChild } from '@angular/core';
declare var $: any;
import { ResourceDocumentService } from './../resources-document/resources-document.service';
import { LazyLoadingService } from './lazy-loading.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resources-gallery',
  templateUrl: './resources-gallery.component.html',
  styleUrls: ['./resources-gallery.component.css'],
})
// export class ResourcesGalleryComponent {
//   data: any = '';
//   filterData: any = '';
//   disableSidebarContent: any = false;
//   filterResourceData: any = '';
//   categoryData: any = '';
//   subCategoryData: any = '';
//   categorySelectedId: any = '';
//   subCategorySelectedId: any = '';
//   selectedFiles: any[] = [];
//   count: number = 0;
//   constructor(
//     private lazyLoadService: LazyLoadingService,
//     private resourceGallery: ResourceGalleryService
//   ) {}
//   onFileSelect(event: any, document: any) {
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       this.count = this.count + 1;
//       this.selectedFiles.push(document);
//     } else {
//       const index = this.selectedFiles.findIndex((file) => file === document);
//       if (index !== -1) {
//         this.count = this.count - 1;
//         this.selectedFiles.splice(index, 1);
//       }
//     }
//   }
//   async downloadFiles() {
//     const zip = new JSZip();

//     for (let i = 0; i < this.selectedFiles.length; i++) {
//       const document = this.selectedFiles[i];
//       // console.log('Document', document);
//       const blob = await this.fetchBlob(document.image);
//       const fileExtension = document.image.split('.').pop(); // Get the file extension
//       const filename = `${document.title}.${fileExtension}`; // Append the file extension to the filename
//       zip.file(filename, blob);
//     }

//     zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
//       const currentDate = new Date();
//       const dateString = currentDate.toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
//       const timeString = currentDate
//         .toTimeString()
//         .slice(0, 8)
//         .replace(/:/g, ''); // Get current time in HHMMSS format
//       const filename = `files_${dateString}_${timeString}.zip`; // Add current date and time to the zip file name
//       saveAs(content, filename);
//     });
//   }

//   fetchBlob(url: string): Promise<Blob> {
//     const correctedUrl = 'assets/' + url; // Add 'assets/' prefix to the URL

//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', correctedUrl);
//       xhr.responseType = 'blob';
//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           resolve(xhr.response);
//         } else {
//           reject(new Error(`Failed to fetch blob from URL: ${correctedUrl}`));
//         }
//       };
//       xhr.onerror = () => {
//         reject(new Error(`Failed to fetch blob from URL: ${correctedUrl}`));
//       };
//       xhr.send();
//     });
//   }
//   ngOnInit(): void {
//     this.resourceGallery.getResourceTypeData().subscribe((res) => {
//       if (res && typeof res === 'object') {
//         this.data = res; // Wrap the single object in an array
//         this.filterResourceData = this.data.data; // Wrap the single object in an array
//         console.log('ResourceTypeData', this.data);
//         console.log('filterResourceData', this.filterResourceData);
//       } else {
//         console.error('Invalid response data: expected a single object');
//       }
//     });

//     this.resourceGallery.getResourceSubTypeDataByTypeID().subscribe((res) => {
//       if (res && typeof res === 'object') {
//         this.filterData = res; // Wrap the single object in an array
//         console.log('JobsiteData2', this.filterData);
//       } else {
//         console.error('Invalid response data: expected a single object');
//       }
//     });

//     this.resourceGallery.getAllCategory().subscribe((res) => {
//       if (res && typeof res === 'object') {
//         this.categoryData = res; // Wrap the single object in an array

//         console.log('categoryData', this.categoryData);
//       } else {
//         console.error('Invalid response data: expected a single object');
//       }
//     });
//     setTimeout(() => {
//       this.lazyLoadService
//         .loadScript('../../assets/assets/table/resourcesGalley.js')
//         .subscribe((_) => {
//           //       setTimeout(function(){
//           //         $('textarea[name="DSC"]').ckeditor();
//           //         $('#editor').ckeditor();
//           //       },2000)
//           // // $('#btn').on('click', function(e) {
//           // //   console.log('ckeditor content: ' + $('textarea[name="DSC"]').val());
//           // // })
//         });
//     }, 1000);

//     setTimeout(function () {
//       console.log('HELLO');
//       $('.header-main').css({
//         background: '#fff',
//         border: '2px solid #ededed',
//         padding: '9px 0px 11px 0px',
//       });
//       $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
//       $('.sticky_color').addClass('sticky_add_color');
//       $('.search-field').css({
//         'background-image': "url('./assets/search.png')",
//       });
//       $('.logo img').css({ 'max-width': '170px' });
//       $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
//       $('.lightboxOverlay').css({
//         display: 'none',
//       });
//       $('.lightbox').css({
//         display: 'none',
//       });
//     }, 2000);
//   }
//   handleClick(id: string, title: string) {
//     console.log('id', id);

//     if (id === '') {
//       // this.resourceDocument.getResourceTypeData().subscribe((res) => {
//       //   if (res && typeof res === 'object') {
//       // this.data = res;
//       this.disableSidebarContent = false;

//       this.filterResourceData = this.data.data; // Wrap the single object in an array
//       // Wrap the single object in an array
//       console.log('JobsiteData', this.data);
//       //   } else {
//       //     console.error('Invalid response data: expected a single object');
//       //   }
//       // });
//     } else if (
//       id == '648b0ba83b5871e6e15ed48d' ||
//       id == '648b0bb23b5871e6e15ed491'
//     ) {
//       this.disableSidebarContent = true;
//       this.resourceGallery.getResourceTypeData().subscribe((res) => {
//         if (res && typeof res === 'object') {
//           this.data = res; // Wrap the single object in an array
//           this.filterResourceData = this.data.data; // Wrap the single object in an array

//           console.log('handleClick id', id);
//           this.filterResourceData = this.filterResourceData.filter(
//             (res: any) => {
//               if (res.resourceSubType == id) {
//                 console.log(res);
//                 return res;
//               }
//             }
//           );
//           console.log('this.data', this.data);
//           console.log('this.filterResourceData', this.filterResourceData);
//         } else {
//           console.error('Invalid response data: expected a single object');
//         }
//       });
//     } else {
//       this.disableSidebarContent = false;

//       this.filterResourceData = this.data.data.filter((res: any) => {
//         if (res.resourceSubType == id) {
//           console.log(res);
//           return res;
//         }
//       });
//       console.log('this.data', this.data);
//       console.log('this.filterResourceData', this.filterResourceData);
//     }
//   }
//   handleChange(event: any) {
//     const selectedValue = event?.target?.value;
//     if (selectedValue) {
//       // Function logic here
//       console.log('Selected value:', selectedValue);
//       this.resourceGallery.getAllSubCategory(selectedValue).subscribe((res) => {
//         if (res && typeof res === 'object') {
//           this.subCategoryData = res; // Wrap the single object in an array

//           console.log('subCategoryData', this.subCategoryData);
//         } else {
//           console.error('Invalid response data: expected a single object');
//         }
//       });
//       // Additional code you want to execute
//     }
//   }

//   handleFormSubmit() {
//     this.categorySelectedId = $('#categoryID option:selected').val();
//     this.subCategorySelectedId = $('#subCategoryID option:selected').val();

//     if (this.categorySelectedId && this.subCategorySelectedId) {
//       this.resourceGallery
//         .getAllResourceDataByFilter(
//           this.categorySelectedId,
//           this.subCategorySelectedId,
//           localStorage.getItem('resourceTypeId')
//         )
//         .subscribe((res) => {
//           if (res && typeof res === 'object') {
//             this.data = res; // Wrap the single object in an array
//             this.filterResourceData = this.data.data; // Wrap the single object in an array

//             console.log('filterResourceData', this.data);
//           } else {
//             console.error('Invalid response data: expected a single object');
//           }
//         });
//     } else {
//       this.resourceGallery
//         .getAllResourceDataByCategoryFilter(
//           this.categorySelectedId,

//           localStorage.getItem('resourceTypeId')
//         )
//         .subscribe((res) => {
//           if (res && typeof res === 'object') {
//             this.data = res; // Wrap the single object in an array
//             this.filterResourceData = this.data.data; // Wrap the single object in an array

//             console.log('filterResourceData', this.data);
//           } else {
//             console.error('Invalid response data: expected a single object');
//           }
//         });
//     }
//     console.log(this.categorySelectedId);
//     console.log(this.subCategorySelectedId);
//     console.log('categoryID');
//     console.log('categoryID');
//   }
//   handleResetButton() {
//     this.resourceGallery.getResourceTypeData().subscribe((res) => {
//       if (res && typeof res === 'object') {
//         const categorySelect = document.getElementById(
//           'categoryID'
//         ) as HTMLSelectElement;
//         const subCategorySelect = document.getElementById(
//           'subCategoryID'
//         ) as HTMLSelectElement;
//         categorySelect.value = '';
//         subCategorySelect.value = '';
//         this.data = res; // Wrap the single object in an array
//         this.filterResourceData = this.data.data; // Wrap the single object in an array
//         console.log('ResourceTypeDataReset', this.data);
//         console.log('filterResourceDataReset', this.filterResourceData);
//       } else {
//         console.error('Invalid response data: expected a single object');
//       }
//     });
//   }
// }
export class ResourcesGalleryComponent {
  @ViewChild('categorySelect') categorySelect: any;
  data: any = '';
  handleCommonData: boolean = true;
  documentFilter: boolean = false;
  filterData: any = '';
  filterResourceData: any = '';
  categoryData: any = '';
  subCategoryData: any = '';
  categorySelectedId: any = '';
  subCategorySelectedId: any = '';
  disableSidebarContent: any = '';
  fabrics_id: any = '';
  commonButtonClick: boolean = false;
  productLookBook: any = '';
  tearSheets: any = '';
  installationManuals: any = '';
  paramsValue: any = '';
  constructor(
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private resourceDocument: ResourceDocumentService,
    private route: ActivatedRoute
  ) {}
  selectedFiles: any[] = [];
  commonOtherData: any[] = [];
  count: number = 0;
  catAData: any[] = [];
  catBData: any[] = [];
  catCData: any[] = [];
  handleLongData: boolean = false;
  // selectedFiles: any[] = [];
  removeFirstNumber(inputString: string): string {
    const firstDigitIndex = inputString.search(/\d/); // Find the index of the first digit
    if (firstDigitIndex !== -1) {
      return (
        inputString.substring(0, firstDigitIndex) +
        inputString.substring(firstDigitIndex + 1)
      );
    }
    return inputString;
  }

  getPdfUrl(imagePath: string): string {
    const modifiedFileName = this.removeFirstNumber(imagePath);
    return 'assets/' + modifiedFileName;
  }
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
      // console.log('Document', document);
      const blob = await this.fetchBlob(document.image);
      const fileExtension = document.image.split('.').pop(); // Get the file extension
      const filename = `${document.title}.${fileExtension}`; // Append the file extension to the filename
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
      this.paramsValue = this.route.snapshot.paramMap.get('name');

      if (
        this.paramsValue == 'products' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleProductsData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'projects' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleProjectsData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'bts' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleBTSData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'others' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleOthersData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else {
        this.handleAllCertificateData('648ac6763b5871e6e15ed341', 'All');
      }
      this.resourceDocument.getAllCategory().subscribe((res) => {
        this.categoryData = null;

        if (res && typeof res === 'object') {
          this.categoryData = res; // Wrap the single object in an array

          console.log('categoryData', this.categoryData);
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
  handleClick(id?: string, name?: string) {
    this.paramsValue = this.route.snapshot.paramMap.get('name');
    localStorage.removeItem('ResourceTypeNameSub');
    localStorage.removeItem('resourceTypeIdSub');
    localStorage.setItem('ResourceTypeNameSub', this.paramsValue);
    localStorage.setItem('resourceTypeIdSub', id);
    // let id = localStorage.getItem("resourceTypeIdSub")

    this.router.navigate([`/resources-gallery/${name}`]).then(() => {
      // window.location.reload();
    });

    console.log('this.id', id);
    console.log('localStorage Id ', localStorage.getItem('resourceTypeIdSub'));

    console.log();
    if (
      localStorage.getItem('resourceTypeIdSub') == '648b0b9c3b5871e6e15ed489'
    ) {
      console.log('HHE 1');
      this.handleProductsData(id, name);
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '648b0ba83b5871e6e15ed48d'
    ) {
      console.log('HHE 2');
      this.handleProjectsData(id, name);
      this.router.navigate([`/resources-gallery/${name}`]).then(() => {
        // window.location.reload();
      });
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '648b0bb23b5871e6e15ed491'
    ) {
      console.log('HHE 3');
      this.handleBTSData(id, name);
      this.router.navigate([`/resources-gallery/${name}`]).then(() => {
        // window.location.reload();
      });
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '649c015577e6aa32c9f114e7'
    ) {
      console.log('HHE 3');
      this.handleOthersData(id, name);
      this.router.navigate([`/resources-gallery/${name}`]).then(() => {
        // window.location.reload();
      });
    } else {
      console.log('HHE 5');

      console.log('AllDataProfile', name);
      this.handleAllCertificateData('648ac6763b5871e6e15ed341', name);
    }
  }
  handleAllCertificateData(id: string, name?: string) {
    this.resourceDocument.getResourceTypeData(id).subscribe((res) => {
      this.data = null;
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array

        this.filterResourceData = this.data.data.filter((res: any) => {
          console.log('filterResourceData', res);
          return res._id != '649c024077e6aa32c9f114f8';
        });

        console.log('ResourceTypeData', this.data);
        console.log('filterResourceData', this.filterResourceData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
  handleProductsData(id: string, name?: string) {
    this.disableSidebarContent = true;
    this.resourceDocument.getResourceDetailsBySubTypeId(id).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array

        console.log('handleClick id', id);
        this.filterResourceData = this.filterResourceData.filter((res: any) => {
          if (res.resourceSubType == id) {
            console.log(res);
            return res;
          }
        });
        console.log('this.data', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
  handleProjectsData(id: string, name?: string) {
    this.disableSidebarContent = true;
    this.resourceDocument.getResourceDetailsBySubTypeId(id).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array

        console.log('handleClick id', id);
        this.filterResourceData = this.filterResourceData.filter((res: any) => {
          if (res.resourceSubType == id) {
            console.log(res);
            return res;
          }
        });
        console.log('this.data', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
  handleBTSData(id: string, name?: string) {
    this.disableSidebarContent = true;
    this.resourceDocument.getResourceDetailsBySubTypeId(id).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array

        console.log('handleClick id', id);
        this.filterResourceData = this.filterResourceData.filter((res: any) => {
          if (res.resourceSubType == id) {
            console.log(res);
            return res;
          }
        });
        console.log('this.data', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
  handleOthersData(id: string, name?: string) {
    this.disableSidebarContent = true;
    this.resourceDocument.getResourceDetailsBySubTypeId(id).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array

        console.log('handleClick id', id);
        this.filterResourceData = this.filterResourceData.filter((res: any) => {
          if (res.resourceSubType == id) {
            console.log(res);
            return res;
          }
        });
        console.log('this.data', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
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
            this.productLookBook = this.data.data.filter((res: any) => {
              console.log('filterResourceData', res);
              return (
                res.resourceSubTypeData[0]._id == '6489ace73b5871e6e15ed0a8'
              );
            }); // Wrap the single object in an array

            this.tearSheets = this.data.data.filter((res: any) => {
              console.log('filterResourceData', res);
              return (
                res.resourceSubTypeData[0]._id == '6489acfc3b5871e6e15ed0ac'
              );
            }); // Wrap the single object in an array
            this.installationManuals = this.data.data.filter((res: any) => {
              console.log('filterResourceData', res);
              return (
                res.resourceSubTypeData[0]._id == '6489ad1d3b5871e6e15ed0b0'
              );
            });
            console.log('filterResourceData23', this.filterResourceData);

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

            console.log('filterResourceData2', this.filterResourceData);
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
  Certificate;
  handleAllData() {
    this.handleCommonData = true;
  }
  handleAllCommonData() {
    this.handleCommonData = false;
  }
}
