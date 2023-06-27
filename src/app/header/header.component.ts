import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  getScreenWidth:any;
  isLoggedIn:any;
  islaptop:any;
  
  constructor(private router: Router) {


    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);

        if(this.getScreenWidth <= 780)
        {
            this.isLoggedIn = true;
            this.islaptop = false;
         //   console.log("AK ")

        }else{
            this.islaptop = true;
            this.isLoggedIn = false;
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
