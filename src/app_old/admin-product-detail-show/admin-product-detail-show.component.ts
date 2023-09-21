import { Component } from '@angular/core';
import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';
import { HtmlToPlaintextPipe } from './html-to-plaintext.pipe';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { ProductDetailShowService } from './product-detail-show.service';
declare var $: any;
@Component({
  selector: 'app-admin-product-detail-show',
  templateUrl: './admin-product-detail-show.component.html',
  styleUrls: ['./admin-product-detail-show.component.css']
})
export class AdminProductDetailShowComponent {
  

  Data:any;
  
  constructor(private AdminCategoryService:ProductDetailShowService,private lazyLoadService:LazyLoadingService) { }
  objectKeys = Object.keys;

  ngOnInit(): void {

    console.log("ID : "+localStorage.getItem('CategoryDetailId'));
  this.AdminCategoryService.getCategoryDetailsId(localStorage.getItem('CategoryDetailId')).subscribe((res)=>{

    this.Data = JSON.parse(JSON.stringify(res));
  //  console.log("JobsiteData "+JSON.stringify(this.Data));
  });

   
  }


}
