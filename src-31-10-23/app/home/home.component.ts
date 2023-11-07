import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Renderer2
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LazyLoadingService } from './lazy-loading.service';
import { HomeService } from './home.service';
import { HomeServicesService } from './home-services.service';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
declare var $: any;
import { InitialLoadService } from './InitialLoad.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', useAnimation(fadeIn, { params: { time: '1s' } })),
      transition(
        '* => void',
        useAnimation(fadeOut, { params: { time: '1s' } })
      ),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  //carousel: any;
  @ViewChild('carousel') carousel: ElementRef;

  slides_new_two = Array();
  slides = Array();
  firstFeaturedProduct: any;
  secondFeaturedProduct: any;
  thirdFeaturedProduct: any;
  fourthFeaturedProduct: any;
  FeaturedProjectdata: any;
  Data: any;
  DataFlow: any;
  count: any;
  underConstruction: boolean = false;
  readyToLive: boolean = true;
  // currentImageIndex = 0;
  currentImageIndex = 0;
  currentImageIndexdata = 0;
  isLoading: boolean = true;
  private destroy$ = new Subject<void>();
  // @ViewChild('carousel', { static: true }) carousel: any;
  constructor(
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private homeService: HomeService,
    private HomeServicesService: HomeServicesService,
    private initialLoadService: InitialLoadService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // const isFirstLoad = sessionStorage.getItem('isFirstLoad') === null;
    // if (isFirstLoad) {
    //   this.isLoading = true;
    //   sessionStorage.setItem('isFirstLoad', 'false'); // Set a flag in sessionStorage
    //   console.log('I am calling isFirstLoad');
    if (window.matchMedia("(max-width: 767px)").matches) {
      this.isLoading = false;
    } else {
      setTimeout(() => {
        this.isLoading = false;

      }, 3500);

    }
    // } else {
    //   console.log('I am calling isFirstLoad2');
    //   console.log('dvrdbgvrfv');
    //   this.isLoading = false;
    // }
  }

  getAllBlogs: any;
  autoSlideCarousel() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.Data.data.length;

      this.currentImageIndexdata =
        (this.currentImageIndexdata + 1) % this.DataFlow.data.length;


    }, 1000); // Change the interval value (in milliseconds) to control the slide speed
  }
  ngOnInit(): void {
    // this.autoSlideCarousel();
    interval(500)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.nextImage();
      });


    if (window.matchMedia("(max-width: 767px)").matches) {
      this.count = 1500;
    } else {
      this.count = 4000;
    }

    setTimeout(() => {
      // $('.carousel').carousel(1000);
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js'
        )
        .subscribe((_) => {
          $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            stagePadding: 30,
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


          $('.owl-carousel-design_cul').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            stagePadding: 30,
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
          if (window.matchMedia("(max-width: 767px)").matches) {




            $(".header-main").css({
              background: "#fff",
              border: "2px solid #ededed",
              padding: "14px 0px 0px 0px",
            });

            // console.log("HELLO AKSHAY")
            $(".header-top").css({
              background: "#fff",
              padding: "5px 0px 5px 0px",
            });
            $(".sticky_color").addClass("sticky_add_color");
            $(".search-field").css({
              "background-image": "url('./assets/search.png')",
            });
            $(".logo_style").attr("src", "./assets/SENSES LOGO.svg");
            $(".search_box").css({ border: "1px solid #000", color: "black" });
            $('.Headerbutton').removeClass('button')
            $('.Headerbutton').addClass('button_black')


          }
        });
    }, this.count);
    this.HomeServicesService.getHomeBanner().subscribe((res) => {
      if (res && typeof res === 'object') {
        if (window.matchMedia("(max-width: 767px)").matches) {
          this.isLoading = false;

        } else {

          this.isLoading = true;
        }
        this.Data = res; // Wrap the single object in an array
        this.DataFlow = res; // Wrap the single object in an array
        // indexdata
        // console.log('JobsiteData', this.Data);
        // setTimeout(() => {
        // }, 3500);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
    this.homeService.getAllFeaturedProduct().subscribe((res: any) => {
      // console.log('Featured Products', res.data);
      res.data.map((product: any) => {
        if (product.orderIndex === 1) {
          this.firstFeaturedProduct = product;
        } else if (product.orderIndex === 2) {
          this.secondFeaturedProduct = product;
        } else if (product.orderIndex === 3) {
          this.thirdFeaturedProduct = product;
        } else if (product.orderIndex === 4) {
          this.fourthFeaturedProduct = product;
        }
      });
      // console.log('firstFeaturedProduct', this.firstFeaturedProduct);
      // console.log('secondFeaturedProduct', this.secondFeaturedProduct);
      // console.log('thirdFeaturedProduct', this.thirdFeaturedProduct);
      // console.log('fourthFeaturedProduct', this.fourthFeaturedProduct);
    });

    this.homeService.getThreeFeaturedProjects().subscribe((res: any) => {
      // console.log('Featured Project', res.data);
      this.FeaturedProjectdata = res.data;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    });

    this.homeService.getAllBlogs().subscribe((res: any) => {
      // console.log('getAllBlogs', res.data);
      this.getAllBlogs = res;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    });
    // this.isLoading = false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.Data.data.length;

    this.currentImageIndexdata =
      (this.currentImageIndex + 1) % this.DataFlow.data.length;
  }

  handleViewAllImage() {
    localStorage.setItem('resourceTypeId', '648ac6763b5871e6e15ed341');
    window.open('/resources-gallery', '_blank');
    // this.router.navigate(['resources-gallery']).then(() => {
    //   // window.location.reload();
    // });
  }
  chunkArray(array: any, size: any) {
    // console.log('array ' + array + ' size ' + size);
    const result = [];
    if (array && array.length > 0) {
      const length = array.length;
      for (let i = 0; i < length; i += size) {
        result.push(array.slice(i, i + size));
      }
    }
    // console.log('array 1 ' + array + ' size 1 ' + size);
    return result;
  }

  blog_news_click(id: any, name: any): void {
    localStorage.removeItem('blogs_id');
    localStorage.removeItem('blogs_title');

    localStorage.setItem('blogs_id', id);
    localStorage.setItem('blogs_title', name);
    window.open(`/blogs/${name.replace(/\s+/g, '-')}`, '_blank');
    // console.log(id)
    // this.router.navigate(['blog_and_news_show_details', name]).then(() => {
    //   // window.location.reload();
    // });
  }
  handleFeaturedProduct(id: any, name: any) {
    // console.log('Product Details ID: ' + id);
    localStorage.setItem('subCategoryId', id);
    // console.log(name);
    window.open(`/product/${name.toLowerCase()}`, '_blank');
    // this.router.navigate(['product_detail_two']).then(() => {
    //   // window.location.reload();
    // });
  }

  project_case(): void {
    this.router.navigate(['insights']).then(() => {
      // window.location.reload();
      localStorage.setItem('project_case', 'project_case');
      if (localStorage.getItem('project_case') == 'project_case') {
        // window.location
        setTimeout(() => {
          this.project_casescroll();
        }, 1000);
      }
    });
  }
  project_casescroll() {
    const element = document.getElementById('project_case');
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      localStorage.setItem('project_case', '');
    }
  }



}
