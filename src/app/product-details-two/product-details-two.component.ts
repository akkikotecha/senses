import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-details-two',
  templateUrl: './product-details-two.component.html',
  styleUrls: ['./product-details-two.component.css'],
})
export class ProductDetailsTwoComponent {
  @ViewChild('target', { static: false }) targetElement!: ElementRef;
  scroll(target: HTMLElement) {
    this.targetElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(
    private ProductDetailService: ProductDetailService,
    private lazyLoadService: LazyLoadingService,
    private elementRef: ElementRef,
    private renderer: Renderer2
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
                items: 3,
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
    }, 1000);

    // console.log("ID : "+localStorage.getItem('productId'));
    this.ProductDetailService.getAllSubCategory(
      localStorage.getItem('subCategoryId')
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array
        // console.log("JobsiteData", );
        console.log('data', JSON.stringify(this.Data));
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
  }
}
