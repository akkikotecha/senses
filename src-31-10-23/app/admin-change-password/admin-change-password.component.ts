import { Component } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service';
import { AdminChangePasswordServiceService } from './admin-change-password-service.service';
import { ChangePassword } from './change-password.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css'],
})
export class AdminChangePasswordComponent {
  AuthChangePassword = new ChangePassword();

  AuthId: any = '';
  AuthOldPassword: any = '';
  AuthNewPassword: any = '';
  color: any = '';
  successfully_login: any = '';
  check_valid: any = false;

  constructor(
    private lazyLoadService: LazyLoadingService,
    private router: Router,
    private changePAssword: AdminChangePasswordServiceService
  ) {
    setTimeout(function () {
      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 100);
  }
  ngOnInit() {
    //  this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js').subscribe(_ => { });
  }
  passwordSubmit() {
 
      if ($('#change-password-form').parsley().validate()) {
         const body = {
            id: localStorage.getItem('id'),
            oldPassword: $('#oldpassword').val(),
            password: $('#newPassword').val()
          };

            const id = localStorage.getItem('id');
    const oldPassword = $('#oldpassword').val();
    const newPassword = $('#newPassword').val();
        Swal.fire({
          title: 'Do you want to update the Password?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#fd7e14',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
        }).then((result) => {
          if (result.isConfirmed) {
            // const formData = new FormData();

            if (id && oldPassword && newPassword) {
              const body = {
        id: id,
        oldPassword: oldPassword,
        password: newPassword
      };

            }

            const formData = new FormData();

            formData.append('id', localStorage.getItem('id'));
            formData.append('oldPassword', $('#oldpassword').val());
            formData.append('password', $('#newPassword').val());

            // Send the form data to the server
            this.changePAssword
              .ChangePassword(body).subscribe((res) => {
                console.log('Result ', res);
                const ra = JSON.stringify(res);
                const Authdata = JSON.parse(ra);

                if (Authdata.message == 'Password updated') {
                  Swal.fire({
                    title: 'Password Updated Successfully...',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'success';
                  this.successfully_login = 'Password Updated Successfully...';
                  window.location.reload();
                } else {
                  Swal.fire({
                    title: 'Password Not Updated!!!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'danger';
                  this.successfully_login = 'Password Not Updated!!!';
                }
                this.check_valid = true;
              });
          }
        });
      }
 
  }
}
