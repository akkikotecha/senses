import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-zest-porudct-details',
  templateUrl: './zest-porudct-details.component.html',
  styleUrls: ['./zest-porudct-details.component.css']
})
export class ZestPorudctDetailsComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
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
      }
      $('.header-top').css({ 'background': '#fff', "padding": "5px 0px 5px 0px" });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({ 'background-image': "url('./assets/search.png')" });
      $('.logo img').css({ "max-width": "170px" })
      $('.logo_style').attr('src', "./assets/SENSES LOGO.svg");
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 2000)
  }
}
