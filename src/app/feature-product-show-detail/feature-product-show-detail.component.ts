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
  ) {}
  objectKeys = Object.keys;
  Data: any;
  FeaturedProjectdata: any;
  ngOnInit(): void {
    setTimeout(function () {
      $('.header-main').css({
        background: '#fff',
        border: '2px solid #ededed',
        padding: '9px 0px 11px 0px',
      });
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 2000);

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
