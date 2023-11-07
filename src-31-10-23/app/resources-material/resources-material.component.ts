import { Component, ViewChild } from '@angular/core';

declare var $: any;
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { LazyLoadingService } from './lazy-loading.service';
import { ResourceDocumentService } from './../resources-document/resources-document.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resources-material',
  templateUrl: './resources-material.component.html',
  styleUrls: ['./resources-material.component.css'],
})
export class ResourcesMaterialComponent {
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
  ) { }
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

  isResourceTypeSelected(documentTypeId: string): boolean {
    const localStorageValue = localStorage.getItem('resourceTypeIdSub');
    return localStorageValue === documentTypeId;
  }
  ngOnInit(): void {
    console.log('categorySelectedId', this.categorySelectedId);
    if (
      localStorage.getItem('resourceTypeIdSub') === '648b0c153b5871e6e15ed4a1'
    ) {
      if (localStorage.getItem('fabrics_id') == '648b0c153b5871e6e15ed4a1') {
        this.fabrics_id = localStorage.getItem('fabrics_id');
        this.documentFilter = true;
        this.handleCommonData = false;
        this.filterResourceData = [];
      } else {
        this.documentFilter = false;
        this.handleCommonData = true;
        this.fabrics_id = null;
        this.filterResourceData = this.data.data.filter((res: any) => {
          if (res.resourceSubType != localStorage.getItem('fabrics_id')) {
            console.log(res);
            return res;
          }
        });
      }
    }

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
        this.paramsValue == 'Fabrics' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleFabricData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'Felts' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleFeltsData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'Colorline' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleColorineData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'CADFiles' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleCADFilesData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else if (
        this.paramsValue == 'Others' &&
        localStorage.getItem('resourceTypeIdSub')
      ) {
        this.handleOthersData(
          localStorage.getItem('resourceTypeIdSub'),
          this.paramsValue
        );
      } else {
        this.handleAllCertificateData('648ac68f3b5871e6e15ed344', 'All');
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
      if (window.matchMedia('(max-width: 767px)').matches) {
        $('.header-main').css({
          background: '#fff',
          border: '2px solid #ededed',
          padding: '14px 0px 1px 0px',
        });
        $('.cd-filter,.cd-filter-trigger').removeClass('filter-is-visible');
      } else {
        $('.header-main').css({
          background: '#fff',
          border: '2px solid #ededed',
          padding: '14px 0px 20px 0px',
        });
      }
      $('.Headerbutton').removeClass('button');
      $('.Headerbutton').addClass('button_black');
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
    // if (id == '648b0c153b5871e6e15ed4a1') {
    //   this.fabrics_id = id;
    //   this.filterResourceData = [];
    // } else {
    //   this.fabrics_id = null;
    //   this.filterResourceData = this.data.data.filter((res: any) => {
    //     if (res.resourceSubType == id) {
    //       console.log(res);
    //       return res;
    //     }
    //   });
    // }
    this.paramsValue = this.route.snapshot.paramMap.get('name');
    localStorage.removeItem('ResourceTypeNameSub');
    localStorage.removeItem('resourceTypeIdSub');
    localStorage.setItem('ResourceTypeNameSub', this.paramsValue);
    localStorage.setItem('resourceTypeIdSub', id);
    // let id = localStorage.getItem("resourceTypeIdSub")

    this.router.navigate([`/resources-materials/${name}`]).then(() => {
      // window.location.reload();
    });

    console.log('this.id', id);
    console.log('localStorage Id ', localStorage.getItem('resourceTypeIdSub'));

    console.log();
    if (
      localStorage.getItem('resourceTypeIdSub') == '648b0c153b5871e6e15ed4a1'
    ) {


      // this.fabrics_id = null;
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //     console.log(res);
      //     return res;
      //   }
      // });
      // console.log('HHE 1');
      this.fabrics_id = "648b0c153b5871e6e15ed4a1";
      this.documentFilter = true;
      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == localStorage.getItem('resourceTypeIdSub')) {
          console.log(res);
          return res;
        }
      });
      this.handleFabricData(id, name);
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '648b0c213b5871e6e15ed4a5'
    ) {
      this.fabrics_id = null;
      this.documentFilter = false;

      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //     console.log(res);
      //     return res;
      //   }
      // });
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   // if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //   console.log(res);
      //   return res;
      //   // }
      // });
      localStorage.setItem('fabrics_id', 'null');
      console.log('HHE 2');
      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == localStorage.getItem('resourceTypeIdSub')) {
          console.log(res);
          return res;
        }
      });
      this.handleFeltsData(id, name);

      this.router.navigate([`/resources-materials/${name}`]).then(() => {
        // window.location.reload();
      });
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '648b0c343b5871e6e15ed4a9'
    ) {
      this.fabrics_id = null;
      this.documentFilter = false;
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //     console.log(res);
      //     return res;
      //   }
      // });
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   // if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //   console.log(res);
      //   return res;
      //   // }
      // });
      localStorage.setItem('fabrics_id', 'null');
      console.log('HHE 3');
      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == localStorage.getItem('resourceTypeIdSub')) {
          console.log(res);
          return res;
        }
      });
      this.handleColorineData(id, name);
      this.router.navigate([`/resources-materials/${name}`]).then(() => {
        // window.location.reload();
      });
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '648b0c5d3b5871e6e15ed4ad'
    ) {
      this.fabrics_id = null;
      this.documentFilter = false;
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //     console.log(res);
      //     return res;
      //   }
      // });
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   // if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //   console.log(res);
      //   return res;
      //   // }
      // });
      localStorage.setItem('fabrics_id', 'null');
      console.log('HHE 3');
      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == localStorage.getItem('resourceTypeIdSub')) {
          console.log(res);
          return res;
        }
      });
      this.handleCADFilesData(id, name);
      this.router.navigate([`/resources-materials/${name}`]).then(() => {
        // window.location.reload();
      });
    } else if (
      localStorage.getItem('resourceTypeIdSub') == '64afd7778dcf20bfd4b01b1c'
    ) {
      this.fabrics_id = null;
      this.documentFilter = false;
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   // if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //   console.log(res);
      //   return res;
      //   // }
      // });
      localStorage.setItem('fabrics_id', 'null');
      console.log('HHE 3');
      console.log("HHHHHthis.data ", this.data)
      this.filterResourceData = this.data.data.filter((res: any) => {
        if (res.resourceSubType == localStorage.getItem('resourceTypeIdSub')) {
          console.log(res);
          return res;
        }
      });
      this.handleOthersData(id, name);
      this.router.navigate([`/resources-materials/${name}`]).then(() => {
        // window.location.reload();
      });
    } else {
      this.fabrics_id = null;
      this.documentFilter = false;
      // this.filterResourceData = this.data.data.filter((res: any) => {
      //   if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
      //     console.log(res);
      //     return res;
      //   }
      // });
      this.filterResourceData = this.data.data.filter((res: any) => {
        // if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
        console.log(res);
        return res;
        // }
      });
      localStorage.setItem('fabrics_id', 'null');
      console.log('HHE 5');

      console.log('AllDataProfile', name);
      this.handleAllCertificateData('648ac68f3b5871e6e15ed344', name);
    }
    // window.location.reload();
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
  handleFabricData(id: string, name?: string) {
    localStorage.setItem('fabrics_id', id);
    console.log("ididid ", id)
    this.disableSidebarContent = true;
    this.resourceDocument.getResourceDetailsBySubTypeId(id).subscribe((res) => {
      console.log("resres ", res)
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array
        console.log("this.filterResourceDatathis.filterResourceData ", this.filterResourceData);
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
        console.log('handleClick id', id);
        this.filterResourceData = this.filterResourceData.filter((res: any) => {
          if (res.resourceSubType == id) {
            console.log(res);
            return res;
          }
        });
        // if (localStorage.getItem('fabrics_id') == '648b0c153b5871e6e15ed4a1') {
        //   this.fabrics_id = localStorage.getItem('fabrics_id');
        //   this.filterResourceData = [];
        // } else {
        //   this.fabrics_id = null;
        //   this.filterResourceData = this.data.data.filter((res: any) => {
        //     if (res.resourceSubType == localStorage.getItem('fabrics_id')) {
        //       console.log(res);
        //       return res;
        //     }
        //   });
        // }
        console.log('this.data', this.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
  handleFeltsData(id: string, name?: string) {
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
  handleColorineData(id: string, name?: string) {
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
  handleCADFilesData(id: string, name?: string) {
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
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.cd-filter,.cd-filter-trigger').removeClass('filter-is-visible');
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
          if (window.matchMedia('(max-width: 767px)').matches) {
            $('.cd-filter,.cd-filter-trigger').removeClass('filter-is-visible');
          }
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
