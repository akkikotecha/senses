import { Component } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { HomeBannerService } from './../admin-home-banner/home-banner.service';
import { LazyLoadingService } from './lazy-loading.service';
declare var $: any;

@Component({
  selector: 'app-adminletstalk',
  templateUrl: './adminletstalk.component.html',
  styleUrls: ['./adminletstalk.component.css'],
})
export class AdminletstalkComponent {
  image_data: any = '';

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

  featuredOneImage: File[] = [];
  featuredTwoImage: File[] = [];
  featuredThreeImage: File[] = [];
  subCategoryID: any = '';
  JobsiteData: any = '';

  constructor(
    private AdminCategoryService: HomeBannerService,
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
  objectKeys = Object.keys;

  ngOnInit(): void {
   
    this.AdminCategoryService.getAllSubCategory().subscribe((res) => {
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
        .loadScript('../../assets/assets/table/letsTalks.js')
        .subscribe((_) => {});
    }, 1000);
  }

  onChangeUpdate(event: any) {
    this.imageUpdate = Array.from(event.target.files);
    // console.log("HELLO "+JSON.stringify(event.target.files));
  }
  onChangeSubCategory(value: any) {
    // console.log("HELLO");
    console.log(value.target.value);
    this.subCategoryID = value.target.value;
  }
  onChange(event: any) {
    this.image = Array.from(event.target.files);
    console.log('HELLO ' + JSON.stringify(event.target.files));
    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }
  submit() {
    if ($('#add-form').parsley().validate()) {
      Swal.fire({
        title: 'Do you want to add the home banner?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = new FormData();

          // Populate image files
          this.image.forEach((file, index) => {
            formData.append('image', file);
          });

          // formData.append('subCategoryName', $('#subCategoryName').val());
          formData.append('title', $('#title').val());
          formData.append('description', $('#description').val());
          formData.append('productId', this.subCategoryID);

          // Send the form data to the server
          this.AdminCategoryService.createHomeBanner(formData).subscribe(
            (res) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'Data Uplodaded SuccessFully') {
                Swal.fire({
                  title: 'Home Banner Added Successfully...',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'success';
                this.successfully_login = 'Home Banner Added Successfully...';
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
                this.successfully_login = 'Home Banner Not Added!!!';
              } else {
                Swal.fire({
                  title: 'Home Banner Not Added!!!',
                  text: '',
                  icon: 'error',
                  confirmButtonText: 'ok',
                  confirmButtonColor: '#fd7e14',
                });

                this.color = 'danger';
                this.successfully_login = 'Home Banner Not Added!!!';
              }
              this.check_valid = true;
            }
          );
        }
      });
    }
  }

  submitEditData() {
    if ($('#edit_basic-form').parsley().validate()) {
      // console.log($('#basic-form').serializeArray());

      Swal.fire({
        title: 'Are you Sure?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          // const file_name = this.image;
          //    this.image = file;

          const fda = new FormData();

          this.imageUpdate.forEach((file, index) => {
            fda.append('image', file);
          });

          //  fda.append('edit_title',"Announcement");
          fda.append('edit_title', $('#edit_title').val());
          fda.append('edit_id', $('#edit_id').val());
          fda.append('edit_description', $('#edit_description').val());
          fda.append('productId', this.subCategoryID);

          // console.log(file+" "+$('#edit_select_date').val()+" "+$('#edit_title').val()+" "+$('#edit_id').val());
          this.AdminCategoryService.EditHomeBannerData(fda).subscribe((res) => {
            // console.log("Result ",res);
            const ra = JSON.stringify(res);

            const Authdata = JSON.parse(ra);
            // console.log(Authdata);
            // console.log("AUTH "+Authdata.message);

            //  console.log(Authdata.data[0].User[0].first_name);

            if (Authdata.message == 'Data Uploaded Successfully') {
              Swal.fire({
                title: 'Home Banner Updated Successfully...',
                text: '',
                icon: 'success',
                confirmButtonText: 'ok',
                confirmButtonColor: '#fd7e14',
              });

              this.edit_color = 'success';
              this.edit_successfully_login =
                'Home Banner Updated Successfully...';
              //  this.get_data();
              window.location.reload();
            } else if (Authdata.message == 'Invalid Image size') {
              Swal.fire({
                title:
                  'Invalid Image size. Please upload 1519px(W) * 700px(H) image size.',
                text: '',
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: '#fd7e14',
              });

              this.edit_color = 'danger';
              this.edit_successfully_login = 'Home Banner Not Added!!!';
            } else {
              Swal.fire({
                title: 'Home Banner Not Added!!!',
                text: '',
                icon: 'error',
                confirmButtonText: 'ok',
                confirmButtonColor: '#fd7e14',
              });

              this.edit_color = 'danger';
              this.edit_successfully_login = 'Home Banner Not Added!!!';
            }

            this.check_valid_data = true;
          });
        }
      });
    }

    // this.color = "success";
    // this.successfully_login = "Project Manager Added Successfully...";
  }
}
