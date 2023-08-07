import { Component, ViewChild } from '@angular/core';
import { LazyLoadingService } from './lazy-loading.service';
import { AppService } from './app.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
declare var $: any;
import { BrowserService } from './browser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  token: string | undefined;
  windowWidth: number;
  recatchaVerification: any = null;
  public isCaptchaValidated: boolean = false; //for self loading

  constructor(
    private AppService: AppService,
    private lazyLoadService: LazyLoadingService,
    private browserService: BrowserService
  ) {
    this.windowWidth = this.browserService.getWindowWidth();
    this.token = undefined;
  }
  handleRecaptchaResolved(token: string): void {
    console.log('reCAPTCHA response:', token);
    this.token = token;
    if (token) {
      this.recatchaVerification = '';
    }

    // You can perform further actions with the token here
  }
  ngOnInit(): void {
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
        .loadScript('../../assets/assets/table/sub_product.js')
        .subscribe((_) => {});
    }, 1000);
  }
  submitEditData() {
    // formData.append('title', $('#title').val());
    //       formData.append('description', $('#description').val());
    console.log(this.token);
    if (this.token == null || this.token == undefined) {
      this.recatchaVerification = 'Please check the captcha';
    } else {
      if ($('#add-form').parsley().validate()) {
        let formData = {
          name: $('#name').val(),
          country: $('#country').val(),
          email: $('#email').val(),
          city: $('#city').val(),
          phoneNumber: $('#phoneNumber').val(),
          company: $('#company').val(),
          jobTitle: $('#jobTitle').val(),
          message: $('#message').val(),
        };
        // Send the form data to the server
        this.AppService.addLetsTalk(formData).subscribe((res) => {
          console.log('Result ', res);
          const ra = JSON.stringify(res);
          const Authdata = JSON.parse(ra);

          if (Authdata.message == 'Data Uplodaded SuccessFully') {
            Swal.fire({
              title: 'Thank You!',
              text: 'We will get back to you shortly',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: '#fd7e14',
            });

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else if (Authdata.message == 'Invalid Image size') {
            Swal.fire({
              title:
                'Invalid Image size. Please upload 1519(W) * 700(H) image size.',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: '#fd7e14',
            });
          } else {
            Swal.fire({
              title: 'Home Banner Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: '#fd7e14',
            });
          }
        });
      }
    }
  }
}
