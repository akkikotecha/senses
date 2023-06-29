import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
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
  slides_new_two = Array();
  slides = Array();
  firstFeaturedProduct: any;
  secondFeaturedProduct: any;
  thirdFeaturedProduct: any;
  fourthFeaturedProduct: any;
  FeaturedProjectdata: any;
  Data: any;
  underConstruction: boolean = false;
  readyToLive: boolean = true;
  // currentImageIndex = 0;
  currentImageIndex = 0;
  private destroy$ = new Subject<void>();
  @ViewChild('carousel', { static: true }) carousel: any;
  constructor(
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private homeService: HomeService,
    private HomeServicesService: HomeServicesService
  ) {}

  getAllBlogs: any;

  ngOnInit(): void {
    interval(500)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.nextImage();
      });

    this.homeService.getAllFeaturedProduct().subscribe((res: any) => {
      console.log('Featured Products', res.data);
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
      console.log('firstFeaturedProduct', this.firstFeaturedProduct);
      console.log('secondFeaturedProduct', this.secondFeaturedProduct);
      console.log('thirdFeaturedProduct', this.thirdFeaturedProduct);
      console.log('fourthFeaturedProduct', this.fourthFeaturedProduct);
    });

    this.homeService.getThreeFeaturedProjects().subscribe((res: any) => {
      console.log('Featured Project', res.data);
      this.FeaturedProjectdata = res.data;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    });

    this.homeService.getAllBlogs().subscribe((res: any) => {
      console.log('getAllBlogs', res.data);
      this.getAllBlogs = res;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    });

    this.HomeServicesService.getHomeBanner().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array
        console.log('JobsiteData', this.Data);
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });

    setTimeout(() => {
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js'
        )
        .subscribe((_) => {
          $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 4,
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
    }, 1000);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.Data.data.length;
  }

  handleViewAllImage() {
    localStorage.setItem('resourceTypeId', '648ac6763b5871e6e15ed341');
    window.open('/resources_gallery', '_blank');
    // this.router.navigate(['resources_gallery']).then(() => {
    //   // window.location.reload();
    // });
  }
  chunkArray(array: any, size: any) {
    console.log('array ' + array + ' size ' + size);
    const result = [];
    if (array && array.length > 0) {
      const length = array.length;
      for (let i = 0; i < length; i += size) {
        result.push(array.slice(i, i + size));
      }
    }
    console.log('array 1 ' + array + ' size 1 ' + size);
    return result;
  }

  blog_news_click(id: any, name: any): void {
    localStorage.removeItem('blogs_id');
    localStorage.removeItem('blogs_title');

    localStorage.setItem('blogs_id', id);
    localStorage.setItem('blogs_title', name);
    window.open(`/blog_and_news_show_details/${name}`, '_blank');
    // console.log(id)
    // this.router.navigate(['blog_and_news_show_details', name]).then(() => {
    //   // window.location.reload();
    // });
  }
  handleFeaturedProduct(id: any) {
    console.log('Product Details ID: ' + id);
    localStorage.setItem('subCategoryId', id);
    window.open('/product_detail_two', '_blank');
    // this.router.navigate(['product_detail_two']).then(() => {
    //   // window.location.reload();
    // });
  }

  ngAfterViewInit() {}
}
