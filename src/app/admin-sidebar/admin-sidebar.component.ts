import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  constructor(private router: Router) {



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

}
