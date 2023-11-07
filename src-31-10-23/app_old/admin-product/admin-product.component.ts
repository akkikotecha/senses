import { Component } from '@angular/core';
import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { AdminProductServiceService } from './admin-product-service.service';
declare var $: any;
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  image_data:any="";

  getProjectManagerData:any='';
  pm_email:any="";
  pm_password:any="";
  pm_first_name:any="";
  pm_last_name:any="";
  pm_confirm_password:any="";
  image: File[] = [];
  successfully_login:any="";
  check_valid:any="";
  color:any="";
  index:any=0;
  edit_successfully_login:any="";
  edit_color:any="";
  check_valid_data:any="";
  imageUpdate:any="";
  snapShots: File[] = [];

  featuredOneImage: File[] = [];
  featuredTwoImage: File[] = [];
  featuredThreeImage: File[] = [];
  
  
  JobsiteData:any="";


  
  constructor(private AdminCategoryService:AdminProductServiceService,private lazyLoadService:LazyLoadingService) {
    setTimeout(function () {
      // console.log('HELLO');

      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 100);
   }
  objectKeys = Object.keys;

  ngOnInit(): void {
   
    
  this.AdminCategoryService.getAllCategory().subscribe((res)=>{

    this.JobsiteData = JSON.parse(JSON.stringify(res));
   console.log(this.JobsiteData);
  });

    setTimeout(() => {

      this.lazyLoadService.loadScript('../../assets/assets/js/sweetalert.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js').subscribe(_ => { });
      
          this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js').subscribe(_ => { });
         this.lazyLoadService.loadScript('https://kendo.cdn.telerik.com/2022.3.1109/js/kendo.all.min.js').subscribe(_ => { });
        this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js').subscribe(_ => { });
        
        this.lazyLoadService.loadScript('../../assets/assets/table/sub_product.js').subscribe(_ => { 

          
        });
      
    }, 1000);

  }

  onChangeUpdate(event: any)
  {
    this.imageUpdate = event.target.files;
    console.log("HELLO "+JSON.stringify(event.target.files[0]));

  }
  onChange(event: any) {
    this.image = Array.from(event.target.files);

    // console.log();
//  this.image = event.target.files;
//  console.log("HELLO "+JSON.stringify(event.target.files[0]));


 // Store the array of selected files in your component's state or variable
 
}
submit() {
  if ($('#add-form').parsley().validate()) {
    Swal.fire({
      title: 'Do you want to add the product?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fd7e14',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();

// Populate image files
this.image.forEach((file, index) => {
  formData.append("image", file);
});

// formData.append('subCategoryName', $('#subCategoryName').val());
formData.append('subCategoryDesc', $('#addDescription').val());
// formData.append('overview', $('#overview').val());
// formData.append('featuredOneTitle', $('#featuredOneTitle').val());
// formData.append('featuredOneDesc', $('#featuredOneDesc').val());
// formData.append('featuredTwoTitle', $('#featuredTwoTitle').val());
// formData.append('featuredTwoDesc', $('#featuredTwoDesc').val());
// formData.append('featuredThreeTitle', $('#featuredThreeTitle').val());
// formData.append('featuredThreeDesc', $('#featuredThreeDesc').val());


// Add other form data fields
formData.append('select_category', "Announcement");
formData.append('categoryId', $('#category').val());
formData.append('subCategoryName', $('#addTitle').val());


        // Send the form data to the server
        this.AdminCategoryService.SubCategory(formData).subscribe((res) => {
          console.log("Result ", res);
          const ra = JSON.stringify(res);
          const Authdata = JSON.parse(ra);

          if (Authdata.message == "Files Uploaded Successfully") {
            Swal.fire({
              title: 'Sub Product Added Successfully...',
              text: '',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "success";
            this.successfully_login = "Sub Product Added Successfully...";
            window.location.reload();
          } else {
            Swal.fire({
              title: 'Sub Product Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "danger";
            this.successfully_login = "Sub Product Not Added!!!";
          }
          this.check_valid = true;
        });
      }
    });
  }
}







  submitEditData()
  {
    if ($('#edit_basic-form').parsley().validate()) {  
        // console.log($('#basic-form').serializeArray());

        Swal.fire({
          title: 'Are you Sure?',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#fd7e14',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
      
  
            // const file = this.imageUpdate;
            
        //    this.image = file; 
        
            const fda =new FormData();

            // fda.append('image',file);
            this.image.forEach((file, index) => {
              fda.append("image", file);
            });
            
            //  fda.append('select_category',"Announcement");
            //  fda.append('select_date',$('#edit_select_date').val());
             fda.append('title',$('#edit_title').val());
             fda.append('subCategoryDesc',$('#edit_description').val());
             fda.append('edit_id',$('#edit_id').val());
             fda.append('categoryId',$('#edit_category').val());

            
        // console.log(file+" "+$('#edit_select_date').val()+" "+$('#edit_title').val()+" "+$('#edit_id').val());
            this.AdminCategoryService.EditOrganizationData(fda).subscribe((res)=>{
  
            console.log("Result ",res);
             const ra = JSON.stringify(res);
              
             const Authdata = JSON.parse(ra);
            
          //  console.log(Authdata.data[0].User[0].first_name);
  
          if(Authdata.message == "Data Uploaded Successfully")
          {
            Swal.fire({
              title: 'Organization Announcement Updated Successfully...',
              text: '',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });
  
            this.color = "success";
            this.successfully_login = "Organization Announcement Updated Successfully...";
           //  this.get_data();
            //  window.location.reload();
            
          }else{
            Swal.fire({
              title: 'Organization Announcement Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"});
  
            this.color = "danger";
            this.successfully_login = "Organization Announcement Not Added!!!";
          }
  
          
          this.check_valid = true;
       
           })
        }
        })
  
      }

// this.color = "success";
// this.successfully_login = "Project Manager Added Successfully...";


  }

}
