import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  getScreenWidth: any;
  isLoggedIn: any;
  Data: any;
  resourceData: any;
  islaptop: any;
  imageArray: any[] = [];
  pdfArray: any[] = [];
  isDataFound: boolean = false;
  constructor(private router: Router, private headerService: HeaderService) {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);

    if (this.getScreenWidth <= 780) {
      this.isLoggedIn = true;
      this.islaptop = false;
      //   console.log("AK ")
    } else {
      this.islaptop = true;
      this.isLoggedIn = false;
    }
  }
  handleSearch(event: any) {
    let keyword = event?.target?.value;
    if (keyword.length >= 3) {
      this.isDataFound = true;
      this.imageArray = [];
      this.pdfArray = [];
      this.headerService.searchBar(keyword).subscribe((res) => {
        if (res && typeof res === 'object') {
          this.Data = res; // Wrap the single object in an array
          this.resourceData = res;
          console.log('this.resourceData', this.resourceData);
          console.log('this.Data', this.Data);
          this.resourceData.resources.forEach((item: any) => {
            if (item.resourceFormat == 'image') {
              this.imageArray.push(item);
            } else if (item.resourceFormat == 'pdf') {
              this.pdfArray.push(item);
            }
          });
          console.log('JobsiteData', this.Data);
        } else {
          console.error('Invalid response data: expected a single object');
        }
      });
      console.log(`Search keyword: ${keyword}`);
      console.log('Can I change?');
    } else {
      this.isDataFound = false;
    }
  }
  handleClose() {
    this.isDataFound = false;
  }
  handleResourcesDocument() {
    localStorage.setItem('resourceTypeId', '6489ac193b5871e6e15ed0a2');
    window.open('/resources_document', '_vsvgrfdf');
    console.log('Handle Resource');
  }
  handleResourcesImage() {
    localStorage.setItem('resourceTypeId', '648ac6763b5871e6e15ed341');
    window.open('/resources_gallery', '_vsvgqrfdf');
    console.log('Handle Resource');
  }
  handleProductClick(id: string, name: string) {
    localStorage.removeItem('subCategoryId');
    localStorage.removeItem('subProductName');

    localStorage.setItem('subCategoryId', id);
    localStorage.setItem('subProductName', name);
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

  netImage: any = './assets/sens_logo_white.svg';
  ngOnInit(): void {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.show('slow').addClass('fixed', 500);
      else sticky.show('slow').removeClass('fixed', 500);
    });
  }
  redirectToSection(): void {
    this.router.navigate(['about_us_two']);
  }
}
