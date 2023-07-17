import { Component, ViewChild } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service';
import { InsightsServiceService } from './insights-service.service';
declare var $: any;
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-insights-two',
  templateUrl: './insights-two.component.html',
  styleUrls: ['./insights-two.component.css'],
})
export class InsightsTwoComponent {
  slides_new_two = Array();
  showDescription: boolean = false;
  slides = Array();
  FeaturedProjectdata: any;
  lengthCount: any;
  getAllBlogs: any;
  @ViewChild('carousel', { static: true }) carousel: any;
  constructor(
    private lazyLoadService: LazyLoadingService,
    private InsightsServiceServiceData: InsightsServiceService,
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paramValue = this.route.snapshot.paramMap.get('paramName');
    if (paramValue == 'clientele') {
      setTimeout(() => {
        this.scroll();
      }, 1000);
    }
    if (paramValue == 'blog') {
      setTimeout(() => {
        this.scrollBlog();
      }, 1000);
    }
    if (paramValue == 'projectCase') {
      setTimeout(() => {
        this.scrollProjectCase();
      }, 1000);
    }

    this.titleService.setTitle('Insights | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Insights | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Browse all latest trends, expert insights, design journeys and captivating stories in the world of acoustics & furniture design. ',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Browse all latest trends, expert insights, design journeys and captivating stories in the world of acoustics & furniture design. ',
    });
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

    this.InsightsServiceServiceData.getAllBlogs().subscribe((res: any) => {
      console.log('getAllBlogs', res.data);
      this.getAllBlogs = res;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    });

    this.InsightsServiceServiceData.getThreeFeaturedProjects().subscribe(
      (res: any) => {
        console.log('Featured Project', res.data);
        this.FeaturedProjectdata = res.data;
        this.lengthCount = res.data.length;
        // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
        // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
        // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
        // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
      }
    );

    setTimeout(() => {
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js'
        )
        .subscribe((_) => {
          $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            stagePadding: 30,
            dots: true,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            items: 3,
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

          $('#owl-demo').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            // //animateOut: "animate__animated animate__slideOutDown",
            // animateIn: "animate__animated animate__flipInX",
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 1,
              },
            },
          });

          $('#owl-demo-new').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            // animateOut: "slideOutDown",
            // animateIn: "slideInDown",
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1,
              },

              568: {
                items: 2,
              },

              992: {
                items: 3,
              },
            },
          });
        });
    }, 1000);
  }
  scroll() {
    const element = document.getElementById('clientele');
    if (element) {
      // const rect = element.getBoundingClientRect();
      // const offset = rect.top + window.scrollY;
      // window.scrollTo({ top: offset, behavior: 'smooth' });
      const offset = 130; // Adjust the offset value as needed
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
  }
  scrollBlog() {
    const element = document.getElementById('blogs');
    if (element) {
      // const rect = element.getBoundingClientRect();
      // const offset = rect.top + window.scrollY + 10;
      // window.scrollTo({ top: offset, behavior: 'smooth' });
      const offset = 130; // Adjust the offset value as needed
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
  }
  scrollProjectCase() {
    const element = document.getElementById('projectCase');
    if (element) {
      // const rect = element.getBoundingClientRect();
      // const offset = rect.top + window.scrollY;
      // window.scrollTo({ top: offset, behavior: 'smooth' });
      const offset = 130; // Adjust the offset value as needed
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
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

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
  ngAfterViewInit() {}
}
