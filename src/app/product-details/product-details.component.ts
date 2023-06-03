import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { ProductDetailService } from './product-detail.service';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
  data_description:any;
  Data:any;
  productname:any;
  constructor(private ProductDetailService:ProductDetailService,private lazyLoadService:LazyLoadingService,private router:Router) {

    this.productname = localStorage.getItem('productname')
   }
 

  ngOnInit(): void {

    // var loc = window.location;
   
    // if(loc.pathname == "/products")
    // {
    //   data_description = "Upgrade your office with our booths and pods designed for private conversations and meetings. Meticulously crafted with high-quality materials, our collection offers versatile and functional solutions that seamlessly blend style and functionality. "
    // }
    setTimeout(function(){
      $('.header-main').css({'background':'#fff', "border":"2px solid #ededed","padding": "9px 0px 11px 0px"});
      $('.header-top').css({'background':'#fff',"padding": "5px 0px 5px 0px"});
      $('.sticky_color').addClass('sticky_add_color');   
      $('.search-field').css({'background-image':"url('./assets/search.png')"});
      $('.logo img').css({"max-width":"170px"})
      $('.logo_style').attr('src',"./assets/SENSES LOGO.svg");
    },200)

    

    // console.log("ID : "+localStorage.getItem('productId'));
    this.ProductDetailService.getAllSubCategory(localStorage.getItem('productId')).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array
        
        console.log("JobsiteData", JSON.stringify(this.Data));
      } else {
        console.error("Invalid response data: expected a single object");
      }
    });
    


    
  }

  // [routerLink]="['/']"

  
  sub_products(id:any):void{
    localStorage.removeItem("subCategoryId");
    // localStorage.removeItem("productname");
    
    localStorage.setItem("subCategoryId",id);
    // localStorage.setItem("productname",name);
    
    // console.log(id)
    this.router.navigate(['product_detail_two'])
    .then(() => {
      // window.location.reload();
    });
  }
}
