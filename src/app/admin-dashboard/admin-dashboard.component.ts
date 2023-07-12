import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  ngOnInit() {
    setTimeout(function () {
      // console.log('HELLO');

      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 2000);
  }
}
