import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  constructor(private router: Router) {



  }

  CarrereJob(): void {
    this.router.navigate(['admin_carrers'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  ChangePasswordRoute(): void {
    this.router.navigate(['admin_change_password'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  CarrereJobDetails(): void {
    this.router.navigate(['admin_carrers_details'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  CategoryRoute(): void {
    this.router.navigate(['admin_product'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  SubCategoryRoute(): void {
    this.router.navigate(['admin_sub_product'])
    // .then(() => {
    //   window.location.reload();
    // });


  }
  AddProductRoute(): void {
    this.router.navigate(['admin_product_detail'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  ResourceRoute(): void {
    this.router.navigate(['admin_resource_type'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  SubResourceRoute(): void {
    this.router.navigate(['admin_resource_sub_type'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  AddResourceRoute(): void {
    this.router.navigate(['admin_resource'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  BannerRoute(): void {
    this.router.navigate(['admin_home_banner'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  FeaturedProductRoute(): void {
    this.router.navigate(['admin_featured_product'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  ProjectsRoute(): void {
    this.router.navigate(['admin_featured_project'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  BlogsRoute(): void {
    this.router.navigate(['admin_blog_news'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  InquiriesRoute(): void {
    this.router.navigate(['admin_lets_talk'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  MastersRoute(): void {
    this.router.navigate(['admin_dashboard'])
    // .then(() => {
    //   window.location.reload();
    // });

  }
  logout(): void {


       Swal.fire({
        title: 'Do you want to Logout?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
        
         Swal.fire({
                title: 'Logout Successfully',
                text: '',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#fd7e14',
              });


                 setTimeout(() => {
               
              this.router.navigate(['/admin_login'])
      localStorage.removeItem('id');
              }, 2000);


              
        }
      });
    
    
    
    // .then(() => {
    //   window.location.reload();
    // });

  }

}
