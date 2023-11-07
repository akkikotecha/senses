import { Component } from '@angular/core';
import { AdminCarerrsJobFormDetailsService } from './admin-carerrs-job-form-details.service';
import { LazyLoadingService } from './lazy-loading.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-admin-carerrs-job-form-details',
  templateUrl: './admin-carerrs-job-form-details.component.html',
  styleUrls: ['./admin-carerrs-job-form-details.component.css']
})
export class AdminCarerrsJobFormDetailsComponent {
  constructor(
    private AdminCarerrsDetailsService: AdminCarerrsJobFormDetailsService,
    private lazyLoadService: LazyLoadingService
  ) {
    setTimeout(function () {
      // console.log('HELLO');

      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 100);

  }


  ngOnInit(): void {

    setTimeout(() => {
      this.lazyLoadService
        .loadScript('../../assets/assets/js/sweetalert.js')
        .subscribe((_) => { });
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js'
        )
        .subscribe((_) => { });
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js'
        )
        .subscribe((_) => { });

      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js'
        )
        .subscribe((_) => { });
      this.lazyLoadService
        .loadScript(
          'https://kendo.cdn.telerik.com/2022.3.1109/js/kendo.all.min.js'
        )
        .subscribe((_) => { });
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js'
        )
        .subscribe((_) => { });

      this.lazyLoadService
        .loadScript('../../assets/assets/table/career_job_form_details_table.js')
        .subscribe((_) => { });
    }, 1000);
  }

}
