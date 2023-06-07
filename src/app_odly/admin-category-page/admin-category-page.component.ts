
import { Component, OnInit } from '@angular/core';
import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { CategoryService } from './category.service';
declare var $: any;
@Component({
  selector: 'app-admin-category-page',
  templateUrl: './admin-category-page.component.html',
  styleUrls: ['./admin-category-page.component.css']
})
export class AdminCategoryPageComponent implements OnInit {

  image_data:any="";

  getProjectManagerData:any='';
  pm_email:any="";
  pm_password:any="";
  pm_first_name:any="";
  pm_last_name:any="";
  pm_confirm_password:any="";
  image="";
  successfully_login:any="";
  check_valid:any="";
  color:any="";
  index:any=0;
  edit_successfully_login:any="";
  edit_color:any="";
  check_valid_data:any="";
  imageUpdate:any="";
  constructor(private AdminCategoryService:CategoryService,private lazyLoadService:LazyLoadingService) { }
  objectKeys = Object.keys;

  ngOnInit(): void {

    setTimeout(() => {

      this.lazyLoadService.loadScript('../../assets/assets/js/sweetalert.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js').subscribe(_ => { });
      
          this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js').subscribe(_ => { });
         this.lazyLoadService.loadScript('https://kendo.cdn.telerik.com/2022.3.1109/js/kendo.all.min.js').subscribe(_ => { });
        this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js').subscribe(_ => { });
        
        this.lazyLoadService.loadScript('../../assets/assets/table/category.js').subscribe(_ => { 

          
        });
      
    }, 1000);

  }

  onChangeUpdate(event: any)
  {
    this.imageUpdate = event.target.files[0];
    console.log("HELLO "+JSON.stringify(event.target.files[0]));

  }
  onChange(event: any) {
 // console.log();
 this.image = event.target.files[0];
 console.log("HELLO "+JSON.stringify(event.target.files[0]));

}
  submit()
  {

    if ($('#add-form').parsley().validate()) {  

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
    

          const file = this.image;
      //    this.image = file; 
      
          const fd =new FormData();
          fd.append('myFile',file);

      fd.append('select_category',"Announcement");
      fd.append('select_date',$('#select_date').val());
      fd.append('title',$('#title').val());
          
          this.AdminCategoryService.addOrganizationData(fd).subscribe((res)=>{

          console.log("Result ",res);
           const ra = JSON.stringify(res);
            
           const Authdata = JSON.parse(ra);
          
        //  console.log(Authdata.data[0].User[0].first_name);

        if(Authdata.message == "Added")
        {
          Swal.fire({
            title: 'Organization Announcement Added Successfully...',
            text: '',
            icon: 'success',
            confirmButtonText: 'ok',
            confirmButtonColor: "#fd7e14"
          });

          this.color = "success";
          this.successfully_login = "Organization Announcement Added Successfully...";
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