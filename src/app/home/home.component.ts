import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { LazyLoadingService} from './lazy-loading.service'
import {HomeService} from "./home.service"
import { HomeServicesService} from './home-services.service'
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
   firstFeaturedProduct : any
   secondFeaturedProduct : any
   thirdFeaturedProduct : any
   fourthFeaturedProduct : any

   Data:any;
  @ViewChild('carousel', {static: true}) carousel: any;
  constructor(private lazyLoadService:LazyLoadingService, private homeService:HomeService, private HomeServicesService:HomeServicesService) {
  }
  
  
  ngOnInit(): void {
    this.homeService.getAllFeaturedProduct().subscribe((res:any)=>{
console.log("Featured Products",res.data)
res.data.map((product:any)=>{
if(product.orderIndex ===1){
this.firstFeaturedProduct= product
}
else if(product.orderIndex ===2){
this.secondFeaturedProduct= product
}
else if(product.orderIndex ===3){
this.thirdFeaturedProduct= product
}
else if(product.orderIndex ===4){
this.fourthFeaturedProduct= product
}
})
console.log("firstFeaturedProduct", this.firstFeaturedProduct)
console.log("secondFeaturedProduct", this.secondFeaturedProduct)
console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
    
    });

    this.HomeServicesService.getHomeBanner().subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array
        console.log("JobsiteData", this.Data);
      } else {
        console.error("Invalid response data: expected a single object");
      }
    });
  
    
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
