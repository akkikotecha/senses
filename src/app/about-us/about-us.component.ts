import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {

    setTimeout(function () {
      console.log("HELLO");
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
      } $('.header-top').css({ 'background': 'transparent!important', "padding": "10px 0px 0px 0px!important" });
      $('.sticky_color').removeClass('sticky_add_color');
      $('.search-field').css({ 'background-image': "url('./assets/search_white.png')" });
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 2000)
  }

}
