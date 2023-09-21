import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { FeatureProductShowDetailService } from './feature-product-show-detail.service';
declare var $: any;

@Component({
  selector: 'app-feature-product-show-detail',
  templateUrl: './feature-product-show-detail.component.html',
  styleUrls: ['./feature-product-show-detail.component.css'],
})
export class FeatureProductShowDetailComponent {
  constructor(
    private ViewAllProjectServiceAll: FeatureProductShowDetailService,
    private lazyLoadService: LazyLoadingService
  ) { }
  objectKeys = Object.keys;
  Data: any;
  FeaturedProjectdata: any;
  ngOnInit(): void {
    setTimeout(function () {
      if (window.matchMedia("(max-width: 767px)").matches) {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 1px 0px",
        });
      } else {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 20px 0px",
        });
      }
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo img').css({ 'max-width': '170px' });
      // $('span img').css({ width: '38.7%' });
      $('p').css({ 'text-align': 'left' });
      $('p').css({ margin: '30px 0' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 1000);
    this.ViewAllProjectServiceAll.getFeaturedProjectsDetails(
      localStorage.getItem('feature_project_Id')
    ).subscribe((res: any) => {
      console.log('Featured Project', res.data);
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
}
