import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { ViewAllProjectService } from './view-all-project.service';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-project-view-all',
  templateUrl: './feature-project-view-all.component.html',
  styleUrls: ['./feature-project-view-all.component.css']
})
export class FeatureProjectViewAllComponent {

  constructor(private ViewAllProjectServiceAll:ViewAllProjectService,private lazyLoadService:LazyLoadingService,private router:Router) { }
  objectKeys = Object.keys;
  Data:any;
  FeaturedProjectdata:any
  ngOnInit(): void {

    setTimeout(function(){
      $('.header-main').css({'background':'#fff', "border":"2px solid #ededed","padding": "9px 0px 11px 0px"});
      $('.header-top').css({'background':'#fff',"padding": "5px 0px 5px 0px"});
      $('.sticky_color').addClass('sticky_add_color');   
      $('.search-field').css({'background-image':"url('./assets/search.png')"});
      $('.logo img').css({"max-width":"170px"})
      $('.logo_style').attr('src',"./assets/SENSES LOGO.svg");
    },200)


    this.ViewAllProjectServiceAll.getThreeFeaturedProjects().subscribe((res:any)=>{
      console.log("Featured Project",res.data)
      this.FeaturedProjectdata = res.data;
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


  feature_project(id:any,name:any):void{

    localStorage.removeItem("feature_project_Id");
    localStorage.removeItem("feature_project_title");
    
    
    localStorage.setItem("feature_project_Id",id);
    localStorage.setItem("feature_project_title",name);
    
    // console.log(id)
    this.router.navigate(['featured_project_view_all_detail',name])
    .then(() => {
      // window.location.reload();
    });
  }
  }
  