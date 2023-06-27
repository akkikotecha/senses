import { Component } from '@angular/core';
import { LazyLoadingService } from './lazy-loading.service';
import { AppService } from './app.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  constructor(
    private AppService: AppService,
    private lazyLoadService: LazyLoadingService
  ) {}

  submitEditData() {
    // formData.append('title', $('#title').val());
    //       formData.append('description', $('#description').val());

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
