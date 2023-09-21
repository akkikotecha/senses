import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-find-dealer',
  templateUrl: './find-dealer.component.html',
  styleUrls: ['./find-dealer.component.css']
})
export class FindDealerComponent {
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
      } $('.header-top').css({ 'background': '#fff', "padding": "5px 0px 5px 0px" });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({ 'background-image': "url('./assets/search.png')" });
      $('.logo img').css({ "max-width": "170px" })

      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 200)
  }

}
