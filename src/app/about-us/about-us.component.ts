import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(function(){
      console.log("HELLO");
      $('.header-main').css({'background':'transparent!important', "border":"0px solid #ededed!important","padding": "0px 0px 32px 0px!important"});
      $('.header-top').css({'background':'transparent!important',"padding": "10px 0px 0px 0px!important"});
      $('.sticky_color').removeClass('sticky_add_color');
      $('.search-field').css({'background-image':"url('./assets/search_white.png')"});

    },2000)
  }

}
