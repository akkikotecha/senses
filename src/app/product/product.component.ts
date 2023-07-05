import { Component } from '@angular/core';
declare var $: any;
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { ProductService } from './product.service';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // router: any;

  constructor(
    private ProductService: ProductService,
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private meta: Meta,
    private titleService: Title
  ) {}
  objectKeys = Object.keys;
  Data: any;
  ngOnInit(): void {
    this.titleService.setTitle('Products | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'Products | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Create a harmonious soundscape with our collection of acoustics and agile furniture solutions. Enhances productivity and focus in a dynamic workspace.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Create a harmonious soundscape with our collection of acoustics and agile furniture solutions. Enhances productivity and focus in a dynamic workspace.',
    });
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

    // console.log("ID : "+localStorage.getItem('CategoryDetailId'));
    this.ProductService.getAllCategory().subscribe((res) => {
      this.Data = JSON.parse(JSON.stringify(res));
      console.log('JobsiteData ' + this.Data);
    });
  }

  sub_products(id: any, name: any, getData: any): void {
    console.log('getData', getData);
    localStorage.removeItem('productId');
    localStorage.removeItem('productname');

    localStorage.setItem('productId', id);
    localStorage.setItem('productname', name);
    localStorage.removeItem('metaTitle');
    localStorage.removeItem('metaDescription');

    localStorage.setItem('metaTitle', getData.metaTitle);
    localStorage.setItem('metaDescription', getData.metaDescription);
    console.log('productname', name);
    // console.log(id)
    if (name == 'Booths & Pods') {
      this.router.navigate(['products', 'boots-pods']).then(() => {
        // window.location.reload();
      });
    } else {
      this.router
        .navigate(['products', name.toLowerCase().replace(/\s+/g, '-')])
        .then(() => {
          // window.location.reload();
        });
    }
  }
}
