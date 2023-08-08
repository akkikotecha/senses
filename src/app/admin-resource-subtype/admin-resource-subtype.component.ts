import { Component } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { AdminResourceSubTypeServiceService } from './adminresourcesubtype.service';
declare var $: any;

@Component({
  selector: 'app-admin-resource-subtype',
  templateUrl: './admin-resource-subtype.component.html',
  styleUrls: ['./admin-resource-subtype.component.css'],
})
export class AdminResourceSubtypeComponent {
  constructor(
    private lazyLoadService: LazyLoadingService,
    private adminResourceSubType: AdminResourceSubTypeServiceService
  ) {}
  color: any = '';
  successfully_login: any = '';
  check_valid: any = '';
  image: any = '';
  JobsiteData: any = '';
  ngOnInit(): void {
    setTimeout(function () {
      // console.log('HELLO');

      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 2000);
    this.adminResourceSubType.getAllResourceType().subscribe((res: any) => {
      console.log(res);
      this.JobsiteData = JSON.parse(JSON.stringify(res));
      console.log(this.JobsiteData);
    });
    setTimeout(() => {
      this.lazyLoadService
        .loadScript('../../assets/assets/js/sweetalert.js')
        .subscribe((_) => {});
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js'
        )
        .subscribe((_) => {});
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js'
        )
        .subscribe((_) => {});

      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js'
        )
        .subscribe((_) => {});
      this.lazyLoadService
        .loadScript(
          'https://kendo.cdn.telerik.com/2022.3.1109/js/kendo.all.min.js'
        )
        .subscribe((_) => {});
      this.lazyLoadService
        .loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js'
        )
        .subscribe((_) => {});

      this.lazyLoadService
        .loadScript('../../assets/assets/table/resource_subtype.js')
        .subscribe((_) => {});
    }, 1000);
  }
  submit() {
    if ($('#add-form').parsley().validate()) {
      Swal.fire({
        title: 'Do you want to add the product?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const requestData = {
            title: $('#resource-sub-type').val(),
            resourceType: $('#resource-type').val(),
          };
          // Send the form data to the server
          console.log(JSON.stringify(requestData));
          this.adminResourceSubType
            .addResourceSubType(requestData)
            .subscribe((res: any) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'Data Uplodaded SuccessFully') {
                Swal.fire({
                  title: 'Admin Resource Type Added Successfully...',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'success';
                this.successfully_login =
                  'Admin Resource Type Added Successfully...';
                window.location.reload();
              } else {
                Swal.fire({
                  title: 'Admin Resource Type Not Added!!!',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Admin Resource Type Not Added!!!';
              }
              this.check_valid = true;
            });
        }
      });
    }
  }
  editSubmit() {
    if ($('#edit-basic-form').parsley().validate()) {
      Swal.fire({
        title: 'Do you want to add the product?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const requestData = {
            title: $('#edit_resource-sub-type').val(),
            resourceType: $('#edit_resource-type').val(),
            edit_id: $('#edit_id').val(),
          };
          // Send the form data to the server
          console.log(JSON.stringify(requestData));
          this.adminResourceSubType
            .EditOrganizationData(requestData)
            .subscribe((res: any) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'Resource Type updated successfully') {
                Swal.fire({
                  title: 'Admin Resource Type Added Successfully...',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'success';
                this.successfully_login =
                  'Admin Resource Type Added Successfully...';
                window.location.reload();
              } else {
                Swal.fire({
                  title: 'Admin Resource Type Not Added!!!',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Admin Resource Type Not Added!!!';
              }
              this.check_valid = true;
            });
        }
      });
    }
  }
}
