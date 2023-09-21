import { Component, ViewChild } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service'
declare var $: any;
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent {

  slides_new_two = Array();
  slides = Array();

  @ViewChild('carousel', { static: true }) carousel: any;
  constructor(private lazyLoadService: LazyLoadingService) {
  }

  ngOnInit(): void {
    setTimeout(function () {

      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 2000)

    setTimeout(() => {


      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js').subscribe(_ => {

        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          dots: true,
          nav: false,
          mouseDrag: true,
          autoplay: true,
          // animateOut: "animate__animated animate__slideOutDown",
          // animateIn: "animate__animated animate__flipInX",
          smartSpeed: 450,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }
        });


        $("#owl-demo").owlCarousel({

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
              items: 1
            },
            600: {
              items: 1
            },
            1000: {
              items: 1
            }
          }


        });


        $("#owl-demo-new").owlCarousel({

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
              items: 6
            },

            568: {
              items: 6
            },

            992: {
              items: 6
            }
          }


        });







      });


    }, 1000);





  }
  ngAfterViewInit() {

  }
}
