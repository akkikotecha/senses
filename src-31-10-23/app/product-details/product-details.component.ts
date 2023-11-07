import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { ProductDetailService } from './product-detail.service';
declare var $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  data_description: any;
  Data: any;
  paramsValue: any;
  productname: any;
  currentid = "";
  productDesc: any;
  isLoading: boolean = true;
  constructor(
    private ProductDetailService: ProductDetailService,
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    this.paramsValue = this.route.snapshot.paramMap.get('name');
    console.log("this.paramsValue ", this.paramsValue)

    if (this.paramsValue == "booths-pods" || this.paramsValue == "boothspods" || this.paramsValue == "booth" || this.paramsValue == "booths" || this.paramsValue == "Booths" || this.paramsValue == "booth&spods" || this.paramsValue == "Booth-Spods" || this.paramsValue == "Booth-spods" || this.paramsValue == "Booth&Spods") {
      this.currentid = "64806d4a39df987ec93056fd";
      this.productname = "Booths & Pods";
      this.productDesc = "Upgrade your office with our booths and pods designed for private conversations and meetings. Meticulously crafted with high-quality materials, our collection offers versatile and functional solutions that seamlessly blend style and functionality.";


    }
    else if (this.paramsValue == "space-dividers" || this.paramsValue == "spacedividers" || this.paramsValue == "space" || this.paramsValue == "spaces" || this.paramsValue == "Spaces" || this.paramsValue == "space&dividers" || this.paramsValue == "Space-dividers" || this.paramsValue == "Space-dividers" || this.paramsValue == "Space&Dividers") {

      this.currentid = "64806d5a39df987ec9305700";
      this.productname = "Space Dividers";
      this.productDesc = "Create a more efficient and productive workspace with our range of space dividers. Designed to optimise your space and cater to the unique needs of modern businesses, our collection offers versatile and solutions that can withstand the test of time.";

    }
    else if (this.paramsValue == "Acoustics" || this.paramsValue == "acoustics" || this.paramsValue == "ACOUSTICS") {

      this.currentid = "64806d6e39df987ec9305703";
      this.productname = "Acoustics";
      this.productDesc = "Transform your workspace into a peaceful oasis with our range of acoustic solutions. Our collection aims to create a more productive work environment with innovative design techniques and high-quality acoustic materials.";
    }
    else if (this.paramsValue == "accessories-&-lighting" || this.paramsValue == "Accessories-&-Lighting" || this.paramsValue == "Accessories" || this.paramsValue == "accessories" || this.paramsValue == "Accessories-&-lighting" || this.paramsValue == "accessories&lighting" || this.paramsValue == "Accessories&Lighting") {

      this.currentid = "64806d8239df987ec9305706";
      this.productname = "Accessories & Lighting";
      this.productDesc = "Elevate your workspace to new heights with our range of accessories and lighting products. Designed to complement our range of agile acoustic furniture, each piece holds artisanal value and is crafted with attention to detail.";

    }
    else {
      this.currentid = "";
      this.productname = "";
      this.productDesc = "";

    }
    console.log("this.currentid ", this.currentid)

    this.ProductDetailService.getAllSubCategory(
      this.currentid
    ).subscribe((res) => {
      if (res && typeof res === 'object') {
        this.Data = res; // Wrap the single object in an array

        console.log('productDetailService', JSON.stringify(this.Data));
      } else {
        console.error('Invalid response data: expected a single object');
      }
    });
  }

  ngOnInit(): void {

    let metaTitle: any = localStorage.getItem('metaTitle');
    let metaDescription: any = localStorage.getItem('metaDescription');
    this.titleService.setTitle(metaTitle);
    this.meta.updateTag({
      property: 'og:title',
      content: metaTitle,
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content: metaDescription,
    });
    this.meta.updateTag({
      name: 'description',
      content: metaDescription,
    });
    // var loc = window.location;

    // if(loc.pathname == "/products")
    // {
    //   data_description = "Upgrade your office with our booths and pods designed for private conversations and meetings. Meticulously crafted with high-quality materials, our collection offers versatile and functional solutions that seamlessly blend style and functionality. "
    // }
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 2500);

    // console.log("ID : "+localStorage.getItem('productId'));

  }

  // [routerLink]="['/']"

  sub_products(id: any, name: string): void {
    localStorage.removeItem('subCategoryId');
    localStorage.removeItem('subProductName');

    localStorage.setItem('subCategoryId', id);
    localStorage.setItem('subProductName', name);
    console.log('name', name);
    // console.log(id)
    if (name == 'Kolo') {
      this.router
        .navigate(['product', `${name.toLowerCase()}-pods`])
        .then(() => {
          window.location.reload();
        });
    } else {
      this.router.navigate(['product', name.toLowerCase()]).then(() => {
        window.location.reload();
      });
    }
  }
}
