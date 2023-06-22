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
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
  @ViewChild('carousel', { static: true }) carousel: any;
  constructor(
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private homeService: HomeService,
    private HomeServicesService: HomeServicesService
  ) {}

  getAllBlogs: any;

  ngOnInit(): void {
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
    }, 1000);
  }

  handleViewAllImage() {
    localStorage.setItem('resourceTypeId', '648ac6763b5871e6e15ed341');
    this.router.navigate(['resources_gallery']).then(() => {
      // window.location.reload();
    });
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

    // console.log(id)
    this.router.navigate(['blog_and_news_show_details', name]).then(() => {
      // window.location.reload();
    });
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
