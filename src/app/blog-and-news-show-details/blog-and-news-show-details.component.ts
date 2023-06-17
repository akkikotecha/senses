import { Component } from '@angular/core';

declare var $: any;

import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { BlogAndNewsShowDetailsService } from './blog-and-news-show-details.service';
declare var $: any;

@Component({
  selector: 'app-blog-and-news-show-details',
  templateUrl: './blog-and-news-show-details.component.html',
  styleUrls: ['./blog-and-news-show-details.component.css']
})
export class BlogAndNewsShowDetailsComponent {
  constructor(private ViewAllProjectServiceAll:BlogAndNewsShowDetailsService,private lazyLoadService:LazyLoadingService) { }
  objectKeys = Object.keys;
  Data:any;
  blogsNews:any
  ngOnInit(): void {

    setTimeout(function(){
      $('.header-main').css({'background':'#fff', "border":"2px solid #ededed","padding": "9px 0px 11px 0px"});
      $('.header-top').css({'background':'#fff',"padding": "5px 0px 5px 0px"});
      $('.sticky_color').addClass('sticky_add_color');   
      $('.search-field').css({'background-image':"url('./assets/search.png')"});
      $('.logo img').css({"max-width":"170px"})
      $('.logo_style').attr('src',"./assets/SENSES LOGO.svg");
    },200)


    this.ViewAllProjectServiceAll.getBlogsDetails(localStorage.getItem("blogs_id")).subscribe((res:any)=>{
      console.log("Blog and news ",res.data)
      this.blogsNews = res.data;
      // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
      // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
      // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
      // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
          
          });

    // console.log("ID : "+localStorage.getItem('CategoryDetailId'));
    // this.ProductService.getAllCategory().subscribe((res)=>{
  
    //   this.Data = JSON.parse(JSON.stringify(res));
    //  console.log("JobsiteData "+this.Data);
    // });
  

    
      
    // }
     
  }


}
  

