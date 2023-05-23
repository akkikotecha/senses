import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  netImage:any = "./assets/sens_logo_white.svg";
  ngOnInit(): void {
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.show("slow").addClass('fixed', 500);
      else sticky.show("slow").removeClass('fixed', 500);
    });
    
  }

}
