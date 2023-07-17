import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
declare var $: any;
import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { ProductDetailService } from './product-detail.service';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-product-details-two',
  templateUrl: './product-details-two.component.html',
  styleUrls: ['./product-details-two.component.css'],
})
export class ProductDetailsTwoComponent {
  data: any = '';
  filterResourceData: any = '';
  filterResourceDataByResourceSubId: any = '';
  CADFiles: any = '';
  filterResourceData2: any = '';
  selectedFiles: any[] = [];
  count: number = 0;
  reportsData: any[] = [];
  certificationsData: any[] = [];
  catAData: any;
  catBData: any;
  catCData: any[] = [];
  colorLineData: any[] = [];
  feltsData: any[] = [];
  commonData: any[] = [];
  fabricsData: any = '';
  filterLookbookData: any[] = [];
  filterTearSheetsData: any[] = [];
  filterInstallationManualsData: any[] = [];
  filterOtherData: any[] = [];
  isLoading: boolean = true;
  commonDataTest: any[] = [];
  @ViewChild('target', { static: false }) targetElement!: ElementRef;
  scroll(target: HTMLElement) {
    this.targetElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(
    private ProductDetailService: ProductDetailService,
    private lazyLoadService: LazyLoadingService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    // this.productname = localStorage.getItem('productname')
  }
  scrollToSectionKOLO(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(
      '#' + sectionId
    );
    if (section) {
      const offset = 50; // Adjust the offset value as needed
      const topOffset =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
  }
  scrollToSection(sectionId: string) {
    const section = this.elementRef.nativeElement.querySelector(
      '#' + sectionId
    );
    if (section) {
      const offset = 100; // Adjust the offset value as needed
      const topOffset =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
  }
  related_product: any;
  Data: any;
  chunkArray(array: any, size: any) {
    console.log('array ' + array + ' size ' + size);
    const result = [];
    if (array.length > 0) {
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
    } else {
      result.push('');
    }

    console.log('array 1 ' + array + ' size 1 ' + size);

    return result;
  }
  ngOnInit(): void {
    function shuffleArray(array: any) {
      var currentIndex = array.length;
      var temporaryValue, randomIndex;

      // While there remain elements to shuffle
      while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    setTimeout(() => {
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js'
        )
        .subscribe((_) => {
          $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            // items:3,
            // animateOut: "animate__animated animate__slideOutDown",
            // animateIn: "animate__animated animate__flipInX",
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4,
              },
            },
          });

          //   $("#owl-demo-new").owlCarousel({

          //     loop:true,
          //     margin:10,
          //     dots:true,
          //     nav:false,
          //     mouseDrag:true,
          //     autoplay:true,
          //     items:3,
          //     // animateOut: "slideOutDown",
          //     // animateIn: "slideInDown",
          //     smartSpeed: 450,
          //     // responsive:{
          //     //   0:{
          //     //     items:5
          //     // },

          //     // 568:{
          //     //     items:5
          //     // },

          //     // 992:{
          //     //     items:5
          //     // }
          //     // }

          // });
        });
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
    setTimeout(() => {
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js'
        )
        .subscribe((_) => {
          $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            items: 4,
            // animateOut: "animate__animated animate__slideOutDown",
            // animateIn: "animate__animated animate__flipInX",
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 4,
              },
            },
          });

          //   $("#owl-demo-new").owlCarousel({

          //     loop:true,
          //     margin:10,
          //     dots:true,
          //     nav:false,
          //     mouseDrag:true,
          //     autoplay:true,
          //     items:3,
          //     // animateOut: "slideOutDown",
          //     // animateIn: "slideInDown",
          //     smartSpeed: 450,
          //     // responsive:{
          //     //   0:{
          //     //     items:5
          //     // },

          //     // 568:{
          //     //     items:5
          //     // },

          //     // 992:{
          //     //     items:5
          //     // }
          //     // }

          // });
        });
    }, 2000);

    // console.log("ID : "+localStorage.getItem('productId'));
    this.ProductDetailService.getResourceTypeData(
      localStorage.getItem('subCategoryId')
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.fabricsData = res; // Wrap the single object in an array
        console.log('fabricsData', res);
        const paramValue = this.route.snapshot.paramMap.get('name');
        console.log('fabricsData', this.fabricsData);
        this.catAData = this.fabricsData.data.filter((res: any) => {
          if (res.fabricsType == 'catA') {
            if (
              localStorage.getItem('subCategoryId') ==
                '64807a8239df987ec9305731' ||
              localStorage.getItem('subCategoryId') ==
                '64807ab539df987ec9305739'
            ) {
              console.log('CATA RES', res.title);
              return (
                res.title != 'SA_CAT A_Quartz' && res.title != 'SA_CAT A_Soho'
              );
            } else if (
              localStorage.getItem('subCategoryId') ==
              '64807a9c39df987ec9305735'
            ) {
              return res.title != 'SA_CAT A_Chelsea';
            }
            if (
              localStorage.getItem('subCategoryId') ==
                '64807a1339df987ec930571c' ||
              '64807a2d39df987ec9305720' ||
              '64807a4a39df987ec9305724'
            ) {
              return res.title != 'SA_CAT A_Tweed';
            }

            return res;
          }
        });
        console.log('this.catAData', this.catAData);
        this.catBData = this.fabricsData.data.filter((res: any) => {
          if (res.fabricsType == 'catB') {
            // console.log(res);
            if (
              localStorage.getItem('subCategoryId') ==
              '64807a8239df987ec9305731'
            ) {
              return res.title != 'SA_CAT B_Beachcomber';
            } else if (
              localStorage.getItem('subCategoryId') ==
              '64807ab539df987ec9305739'
            ) {
              return res.title != 'SA_CAT B_Beachcomber';
            } else if (
              localStorage.getItem('subCategoryId') ==
              '64807a9c39df987ec9305735'
            ) {
              return res;
            }
            if (
              localStorage.getItem('subCategoryId') ==
              '64807a1339df987ec930571c'
            ) {
              return res;
            } else if (
              localStorage.getItem('subCategoryId') ==
                '64807a2d39df987ec9305720' ||
              '64807a4a39df987ec9305724'
            ) {
              return res.title == 'SA_CAT B_Dolly';
            } else {
              return res;
            }
          }
        });
        console.log('this.catBData', this.catBData);
        this.catCData = this.fabricsData.data.filter((res: any) => {
          if (res.fabricsType == 'catC') {
            if (
              localStorage.getItem('subCategoryId') ==
              '64807a1339df987ec930571c'
            ) {
              return res;
            } else if (
              localStorage.getItem('subCategoryId') ==
              '64807a8239df987ec9305731'
            ) {
              return res.title != 'SA_CAT C_Mode';
            } else if (
              localStorage.getItem('subCategoryId') ==
                '64807a9c39df987ec9305735' ||
              localStorage.getItem('subCategoryId') ==
                '64807ab539df987ec9305739'
            ) {
              return res.title != 'SA_CAT C_Mica';
            } else if (
              localStorage.getItem('subCategoryId') ==
                '64807a2d39df987ec9305720' ||
              '64807a4a39df987ec9305724'
            ) {
              return res.title != 'SA_CAT C_Mode';
            } else {
              return res;
            }
          }
        });
        console.log('this.catCData', this.catCData);
        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getAllSubCategory(
      localStorage.getItem('subCategoryId')
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array
        console.log('JobsiteData', res);
        console.log('data[0]', this.Data[0]);
        this.titleService.setTitle(this.Data[0].metaTitle);
        this.meta.updateTag({
          property: 'og:title',
          content: this.Data[0].metaTitle,
        });

        // Set the dynamic description
        this.meta.updateTag({
          name: 'og:description',
          content: this.Data[0].metaDescription,
        });
        this.meta.updateTag({
          name: 'description',
          content: this.Data[0].metaDescription,
        });
        var related_product_id = this.Data[0].related_product_id;

        var shuffledArray = shuffleArray(related_product_id);

        this.ProductDetailService.getsubproductget(shuffledArray).subscribe(
          (res) => {
            // console.log("getsubproductget : "+shuffleArray(res) );
            this.related_product = res;
            console.log(
              'related_product.data: ' + JSON.stringify(this.related_product)
            );
          }
        );
        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });

    //colorLine Data
    this.ProductDetailService.getResourceSubTypeCommonData(
      '648b0c343b5871e6e15ed4a9'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        const paramValue = this.route.snapshot.paramMap.get('name');
        if (
          paramValue == 'plush' ||
          paramValue == 'breeze' ||
          paramValue == 'cara'
        ) {
          this.colorLineData = []; // Wrap the single object in an array
        } else {
          this.colorLineData = this.data.data; // Wrap the single object in an array
        }
        console.log('colorLineData', res);
        console.log('data', this.Data);

        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    //Felts Data
    this.ProductDetailService.getResourceSubTypeCommonData(
      '648b0c213b5871e6e15ed4a5'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        const paramValue = this.route.snapshot.paramMap.get('name');
        if (
          paramValue == 'plush' ||
          paramValue == 'breeze' ||
          paramValue == 'cara'
        ) {
          this.feltsData = []; // Wrap the single object in an array
        } else {
          this.feltsData = this.data.data; // Wrap the single object in an array
        }
        console.log('JobsiteData', res);
        console.log('data', this.Data);

        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    //certifications Data
    this.ProductDetailService.getResourceSubTypeCommonData(
      '648b0bdd3b5871e6e15ed495'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.certificationsData = this.data.data; // Wrap the single object in an array
        console.log('JobsiteData', res);
        console.log('data', this.Data);

        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getResourceParticularData(
      '64afe8558dcf20bfd4b01e43'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.commonDataTest = this.data.data; // Wrap the single object in an array
        console.log('commonDataTest', this.data.data);
        // console.log('commonDataTest', this.Data);

        // console.log("shuffledArray " +shuffledArray);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    //Download Data
    this.ProductDetailService.getAllResourceDataByFilter(
      localStorage.getItem('productId'),
      localStorage.getItem('subCategoryId'),
      '6489ac193b5871e6e15ed0a2'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.filterLookbookData = [];
        this.filterTearSheetsData = [];
        this.filterInstallationManualsData = [];
        this.filterOtherData = [];
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array
        this.filterResourceData = this.data.data.filter((res: any) => {
          if (res.resourceSubType == '649c015577e6aa32c9f114e7') {
            this.filterOtherData.push(res);
          }
        });
        //Project LookBook
        this.filterResourceData = this.data.data.filter((res: any) => {
          if (res.resourceSubType == '6489ace73b5871e6e15ed0a8') {
            this.filterLookbookData.push(res);
          }
        });
        // tear sheet
        this.filterResourceData = this.data.data.filter((res: any) => {
          if (res.resourceSubType == '6489acfc3b5871e6e15ed0ac') {
            this.filterTearSheetsData.push(res);
          }
        });
        // Installation Manual
        this.data.data.filter((res: any) => {
          if (res.resourceSubType == '6489ad1d3b5871e6e15ed0b0') {
            console.log('this.filterInsta', res);
            this.filterInstallationManualsData.push(res);
          }
        });

        console.log('this.filterLookbookData', this.filterLookbookData);
        console.log(this.filterTearSheetsData);
        console.log(this.filterInstallationManualsData);

        console.log('filterResourceData', this.data.data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getAllResourceDataByResourceSubIdFilter(
      localStorage.getItem('productId'),
      localStorage.getItem('subCategoryId'),
      '648b0c5d3b5871e6e15ed4ad'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.CADFiles = this.data.data; // Wrap the single object in an array
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getAllResourceDataByResourceSubIdFilter(
      localStorage.getItem('productId'),
      localStorage.getItem('subCategoryId'),
      '648b0beb3b5871e6e15ed499'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.reportsData = this.data.data; // Wrap the single object in an array
        console.log('reportsData', this.reportsData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getAllResourceDataByResourceSubIdFilter(
      localStorage.getItem('productId'),
      localStorage.getItem('subCategoryId'),
      '648b0c5d3b5871e6e15ed4ad'
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceDataByResourceSubId = this.data.data; // Wrap the single object in an array
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.ProductDetailService.getResourceAllCommonData().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.commonData = this.data.data; // Wrap the single object in an array
        console.log('this.commonData', this.commonData);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
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

  handleFeaturedProduct(id: any, productName?: string) {
    localStorage.removeItem('subCategoryId');
    localStorage.removeItem('productName');

    localStorage.setItem('subCategoryId', id);
    // localStorage.removeItem("productName");
    window.open(`/product/${productName?.toLowerCase()}`, '_blank');
    // this.router.navigate(['product_detail_two']).then(() => {
    //   // window.location.reload();
    // });
  }
  onAccordionClick(id: any) {
    this.ProductDetailService.getResourceImageDataBySubTypeID(id).subscribe(
      (res) => {
        if (res && typeof res === 'object') {
          this.data = res; // Wrap the single object in an array
          this.filterResourceData2 = this.data.data; // Wrap the single object in an array

          console.log(this.filterResourceData2);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      }
    );
  }
  onAccordionMainClick(id: any) {
    console.log('id', id);
    this.ProductDetailService.getAllResourceDataByFilter(
      localStorage.getItem('productId'),
      localStorage.getItem('subCategoryId'),
      id
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.data = res; // Wrap the single object in an array
        this.filterResourceData = this.data.data; // Wrap the single object in an array
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }
}
