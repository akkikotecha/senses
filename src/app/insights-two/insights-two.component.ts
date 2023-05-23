import { Component, ViewChild } from '@angular/core';
import {LazyLoadingService } from '../lazy-loading.service'
declare var $: any;

@Component({
  selector: 'app-insights-two',
  templateUrl: './insights-two.component.html',
  styleUrls: ['./insights-two.component.css']
})
export class InsightsTwoComponent {

  slides_new_two = Array();
  slides = Array();

  @ViewChild('carousel', {static: true}) carousel: any;
  constructor(private lazyLoadService:LazyLoadingService) {
  }

  ngOnInit(): void {
    setTimeout(function(){
      console.log("HELLO");
      $('.header-main').css({'background':'#fff', "border":"2px solid #ededed","padding": "9px 0px 11px 0px"});
      $('.header-top').css({'background':'#fff',"padding": "5px 0px 5px 0px"});
      $('.sticky_color').addClass('sticky_add_color');   
      $('.search-field').css({'background-image':"url('./assets/search.png')"});
      $('.logo img').css({"max-width":"170px"})
      $('.logo_style').attr('src',"./assets/SENSES LOGO.svg");

    },2000)
    
    setTimeout(() => {
      

      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js').subscribe(_ => { 
        
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:false,
        mouseDrag:true,
        autoplay:true,
        // animateOut: "animate__animated animate__slideOutDown",
        // animateIn: "animate__animated animate__flipInX",
        smartSpeed: 450,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $("#owl-demo").owlCarousel({
 
      loop:true,
      margin:10,
      dots:true,
      nav:false,
      mouseDrag:true,
      autoplay:true,
      // //animateOut: "animate__animated animate__slideOutDown",
      // animateIn: "animate__animated animate__flipInX",
      smartSpeed: 450,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
     
 
  });


  $("#owl-demo-new").owlCarousel({
 
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    mouseDrag:true,
    autoplay:true,
    // animateOut: "slideOutDown",
    // animateIn: "slideInDown",
    smartSpeed: 450,
    responsive:{
      0:{
        items:1
    },

    568:{
        items:2
    },
    
    992:{
        items:3
    }
    }
   

});


  


  
    
      });
     
      
    }, 1000);

    
     
   

  }
  ngAfterViewInit() {
   
  } 
}
