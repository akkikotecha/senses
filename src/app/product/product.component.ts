import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { ProductService } from './product.service';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // router: any;

  
  constructor(private ProductService:ProductService,private lazyLoadService:LazyLoadingService,private router:Router) { }
  objectKeys = Object.keys;
  Data:any;
  ngOnInit(): void {

    setTimeout(function(){
      $('.header-main').css({'background':'#fff', "border":"2px solid #ededed","padding": "9px 0px 11px 0px"});
      $('.header-top').css({'background':'#fff',"padding": "5px 0px 5px 0px"});
      $('.sticky_color').addClass('sticky_add_color');   
      $('.search-field').css({'background-image':"url('./assets/search.png')"});
      $('.logo img').css({"max-width":"170px"})
      $('.logo_style').attr('src',"./assets/SENSES LOGO.svg");
    },200)


    // console.log("ID : "+localStorage.getItem('CategoryDetailId'));
    this.ProductService.getAllCategory().subscribe((res)=>{
  
      this.Data = JSON.parse(JSON.stringify(res));
     console.log("JobsiteData "+this.Data);
    });
  

    
      
    }
     
    sub_products(id:any,name:any):void{

      localStorage.removeItem("productId");
      localStorage.removeItem("productname");
      
      
      localStorage.setItem("productId",id);
      localStorage.setItem("productname",name);
      
      // console.log(id)
      this.router.navigate(['sub_products',name])
      .then(() => {
        // window.location.reload();
      });
    }
  }
  
