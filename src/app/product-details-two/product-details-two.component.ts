import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-details-two',
  templateUrl: './product-details-two.component.html',
  styleUrls: ['./product-details-two.component.css']
})
export class ProductDetailsTwoComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
constructor(private ProductDetailService:ProductDetailService,private lazyLoadService:LazyLoadingService) {

  // this.productname = localStorage.getItem('productname')
 }
 Data:any;
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

    
    // console.log("ID : "+localStorage.getItem('productId'));
    this.ProductDetailService.getAllSubCategory(localStorage.getItem('subCategoryId')).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = [res]; // Wrap the single object in an array
        console.log("JobsiteData", this.Data[0][0].overview);
      } else {
        console.error("Invalid response data: expected a single object");
      }
    });
  }
}
