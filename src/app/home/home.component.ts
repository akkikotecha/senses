import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { LazyLoadingService} from './lazy-loading.service'

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  //carousel: any;
  slides_new_two = Array();
  slides = Array();

  @ViewChild('carousel', {static: true}) carousel: any;
  constructor(private lazyLoadService:LazyLoadingService) {
  }
  ngOnInit(): void {

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