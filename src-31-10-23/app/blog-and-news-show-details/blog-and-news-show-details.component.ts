import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { BlogAndNewsShowDetailsService } from './blog-and-news-show-details.service';
declare var $: any;


@Component({
  selector: 'app-blog-and-news-show-details',
  templateUrl: './blog-and-news-show-details.component.html',
  styleUrls: ['./blog-and-news-show-details.component.css'],
})
export class BlogAndNewsShowDetailsComponent {
  paramsValue = "";
  constructor(
    private ViewAllProjectServiceAll: BlogAndNewsShowDetailsService,
    private lazyLoadService: LazyLoadingService,
    private route: ActivatedRoute
  ) {
    this.paramsValue = this.route.snapshot.paramMap.get('name');
  }
  objectKeys = Object.keys;
  Data: any;
  blogsNews: any;
  blogLink: any;
  blogUrl = 'https://example.com/your-blog-post';
  ngOnInit(): void {
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
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 1500);


    this.ViewAllProjectServiceAll.getBlogsDetailsName(this.paramsValue)
      .subscribe((res: any) => {
        // console.log("res ", res.data[0]._id);
        this.ViewAllProjectServiceAll.getBlogsDetails(
          res.data[0]._id
        ).subscribe((res: any) => {
          console.log('Blog and news ', res.data);
          this.blogsNews = res.data;
          // console.log("firstFeaturedProduct", this.firstFeaturedProduct)
          // console.log("secondFeaturedProduct", this.secondFeaturedProduct)
          // console.log("thirdFeaturedProduct", this.thirdFeaturedProduct)
          // console.log("fourthFeaturedProduct", this.fourthFeaturedProduct)
        });
      })



    // console.log("ID : "+localStorage.getItem('CategoryDetailId'));
    // this.ProductService.getAllCategory().subscribe((res)=>{

    //   this.Data = JSON.parse(JSON.stringify(res));
    //  console.log("JobsiteData "+this.Data);
    // });

    // }

    setTimeout(function () {
      $('h1, h2, h3, h4, h5, h6').css('text-align', 'center');
      $('.image').css('text-align', 'center');
    }, 1000);
  }
  shareOnFacebook() {
    // Open the Facebook share dialog with your blog URL
    const currentUrl = window.location.href;

    // Split the URL by '4200/'
    const parts = currentUrl.split('.com/');

    // Get the text after '4200/'
    const textAfter4200 = parts[1];

    // Do something with the text, e.g., display it in the console
    console.log('Text after 4200:', textAfter4200);
    // Do something with the URL, e.g., display it in the console
    console.log('Current URL:', currentUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://sensesakustik.com/${textAfter4200}`
      )}`,
      '_blank'
    );
  }
  shareOnTwitter() {
    // Customize the tweet text as needed
    const twitterText = 'Check out this link:';
    const currentUrl = window.location.href;

    // Split the URL by '4200/'
    const parts = currentUrl.split('.com/');

    // Get the text after '4200/'
    const textAfter4200 = parts[1];

    // Do something with the text, e.g., display it in the console
    console.log('Text after 4200:', textAfter4200);
    // Do something with the URL, e.g., display it in the console
    console.log('Current URL:', currentUrl);
    // Open the Twitter share dialog with your blog URL and tweet text
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        twitterText
      )}&url=${encodeURIComponent(
        `https://sensesakustik.com/${textAfter4200}`
      )}`,
      '_blank'
    );
  }
  shareOnWhatsApp() {
    // Construct the WhatsApp share text with the blog URL
    const whatsappText = `Check out this link: ${this.blogUrl}`;
    // Open the WhatsApp share dialog with the share text
    // window.open(
    //   `whatsapp://send?text=${encodeURIComponent(whatsappText)}`,
    //   '_blank'
    // );
    const currentUrl = window.location.href;

    // Split the URL by '4200/'
    const parts = currentUrl.split('.com/');

    // Get the text after '4200/'
    const textAfter4200 = parts[1];
    const whatsappLink = `https://api.whatsapp.com/send?text=https://sensesakustik.com/${textAfter4200}`;

    // Redirect to the WhatsApp link
    // window.location.href = w/hatsappLink;
    window.open(whatsappLink, '_blank');
    // Do something with the text, e.g., display it in the console
    console.log('Text after 4200:', textAfter4200);
  }
}
