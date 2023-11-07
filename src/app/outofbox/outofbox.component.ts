import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-outofbox',
  templateUrl: './outofbox.component.html',
  styleUrls: ['./outofbox.component.css']
})
export class OutofboxComponent {

  constructor(){
    setTimeout(function () {
      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 100);
  }

}
