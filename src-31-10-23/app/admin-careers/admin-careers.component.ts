import { Component } from '@angular/core';
import { LazyLoadingService } from './lazy-loading.service';
import { AdminCarerrsService } from './admin-carerrs.service';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertOptions } from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-admin-careers',
  templateUrl: './admin-careers.component.html',
  styleUrls: ['./admin-careers.component.css']
})
export class AdminCareersComponent {

  getProjectManagerData: any = '';
  pm_email: any = '';
  pm_password: any = '';
  pm_first_name: any = '';
  pm_last_name: any = '';
  pm_confirm_password: any = '';
  image: File[] = [];
  successfully_login: any = '';
  check_valid: any = '';
  color: any = '';
  index: any = 0;
  edit_successfully_login: any = '';
  edit_color: any = '';
  check_valid_data: any = '';
  imageUpdate: File[] = [];
  snapShots: File[] = [];
  title: string;
  description: string;

  featuredOneImage: File[] = [];
  featuredTwoImage: File[] = [];
  featuredThreeImage: File[] = [];
  subCategoryID: any = '';
  JobsiteData: any = '';
  constructor(
    private AdminCarerrsService: AdminCarerrsService,
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
        .loadScript('../../assets/assets/table/career_data.js')
        .subscribe((_) => { });
    }, 1000);
  }

  submit() {
    if ($('#add-form').parsley().validate()) {
      Swal.fire({
        title: 'Do you want to add the Careers?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = new FormData();




          formData.append('title', $('#title').val());
          formData.append('description', $('#addCarrerDescription').val());


          // Send the form data to the server
          this.AdminCarerrsService.createCareer($('#add-form').serializeArray()).subscribe(
            (res) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'Careers Added Successfully ') {
                Swal.fire({
                  title: 'Careers Added Successfully...',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'success';
                this.successfully_login = 'Careers Added Successfully...';
                window.location.reload();
              } else if (Authdata.message == 'Invalid Image size') {
                Swal.fire({
                  title:
                    'Invalid Image size. Please upload 1519(W) * 700(H) image size.',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Careers Not Added!!!';
              } else {
                Swal.fire({
                  title: 'Careers Not Added!!!',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Careers Not Added!!!';
              }
              this.check_valid = true;
            }
          );
        }
      });
    }
  }
  editSubmit() {
    if ($('#edit_basic-form').parsley().validate()) {
      Swal.fire({
        title: 'Do you want to update the Careers?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          // const formData = new FormData();




          // formData.append('_id', $('#edit_id').val());
          // formData.append('title', $('#edit_title').val());
          // formData.append('description', $('#edit_CarrerDescription').val());


          // Send the form data to the server
          this.AdminCarerrsService.EditCareer($('#edit_basic-form').serializeArray()).subscribe(
            (res) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'updated') {
                Swal.fire({
                  title: 'Careers Updated Successfully...',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'success';
                this.successfully_login = 'Careers Updated Successfully...';
                window.location.reload();
              } else if (Authdata.message == 'Invalid Image size') {
                Swal.fire({
                  title:
                    'Invalid Image size. Please upload 1519(W) * 700(H) image size.',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Careers Not Updated!!!';
              } else {
                Swal.fire({
                  title: 'Careers Not Updated!!!',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Careers Not Updated!!!';
              }
              this.check_valid = true;
            }
          );
        }
      });
    }
  }

}

