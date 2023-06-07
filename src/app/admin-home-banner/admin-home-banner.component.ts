import { Component } from '@angular/core';
import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { HomeBannerService } from './home-banner.service';
declare var $: any;

@Component({
  selector: 'app-admin-home-banner',
  templateUrl: './admin-home-banner.component.html',
  styleUrls: ['./admin-home-banner.component.css']
})
export class AdminHomeBannerComponent {
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


  
  constructor(private AdminCategoryService:HomeBannerService,private lazyLoadService:LazyLoadingService) { }
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
        
        this.lazyLoadService.loadScript('../../assets/assets/table/home_banner.js').subscribe(_ => { 

          
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
      title: 'Do you want to add the home banner?',
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
formData.append('title', $('#title').val());
formData.append('description', $('#description').val());


        // Send the form data to the server
        this.AdminCategoryService.createHomeBanner(formData).subscribe((res) => {
          console.log("Result ", res);
          const ra = JSON.stringify(res);
          const Authdata = JSON.parse(ra);

          if (Authdata.message == "Data Uplodaded SuccessFully") {
            Swal.fire({
              title: 'Home Banner Added Successfully...',
              text: '',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "success";
            this.successfully_login = "Home Banner Added Successfully...";
            window.location.reload();
          } else {
            Swal.fire({
              title: 'Home Banner Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "danger";
            this.successfully_login = "Home Banner Not Added!!!";
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
      
  
            const file = this.imageUpdate;
        //    this.image = file; 
        
            const fda =new FormData();

            fda.append('myFile',file);
            
             fda.append('select_category',"Announcement");
             fda.append('select_date',$('#edit_select_date').val());
             fda.append('title',$('#edit_title').val());
             fda.append('edit_id',$('#edit_id').val());
            
        console.log(file+" "+$('#edit_select_date').val()+" "+$('#edit_title').val()+" "+$('#edit_id').val());
            this.AdminCategoryService.EditOrganizationData(fda).subscribe((res)=>{
  
            console.log("Result ",res);
             const ra = JSON.stringify(res);
              
             const Authdata = JSON.parse(ra);
            
          //  console.log(Authdata.data[0].User[0].first_name);
  
          if(Authdata.message == "Added")
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
             window.location.reload();
            
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

