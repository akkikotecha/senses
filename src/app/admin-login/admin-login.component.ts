import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';
import { AdminLoginServiceService } from './admin-login-service.service';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  AuthUser = new Login();
  auth_email: any = "";

  auth_password: any = "";
  color: any = "";
  successfully_login: any = "";
  check_valid: any = false;

  constructor(private router: Router, private loginAuth: AdminLoginServiceService) { }

  ngOnInit(): void {
    setTimeout(function () {
      // console.log('HELLO');

      $('.lightboxOverlay').css({
        display: 'none',
      });
      $('.lightbox').css({
        display: 'none',
      });
    }, 100);
    $('#myHeader').css({ "display": "none" });
    $('#foot').css({ "display": "none" });
    $('.mlctr-underlayer').remove();
    $('.vd_set').remove();
    $('.modal-backdrop').remove();
  }

  onClickSubmit(data: any) {
    alert("Entered Email id : " + data.email);
  }
  // submit() {
  //   console.log("EH" + this.AuthUser.email);


  //   if (this.AuthUser.email == null || this.AuthUser.email == "") {
  //     this.auth_email = true;
  //     this.successfully_login = false;
  //     this.check_valid = false;
  //   }
  //   if (this.AuthUser.password == null || this.AuthUser.password == "") {
  //     this.auth_password = true;
  //     this.successfully_login = false;
  //     this.check_valid = false;
  //   }
  //   else {

  //     this.loginAuth.AuthLogin(this.AuthUser).subscribe((res) => {

  //       //console.log("Result ",res);
  //       const ra = JSON.stringify(res);

  //       const Authdata = JSON.parse(ra);
  //       //    console.log(Authdata.data);

  //       if (Authdata.data == "Incorrect Password") {

  //         this.check_valid = true;

  //         this.color = "danger";
  //         this.successfully_login = "Invalid email or password!";



  //       } else {
  //         this.color = "success";
  //         this.successfully_login = "Login Successfully...";
  //         localStorage.removeItem('id');
  //         console.log("AuthData", Authdata);
  //         this.check_valid = true;

  //         localStorage.setItem('id', Authdata.data[0]._id);

  //         localStorage.setItem('baseurlhostname', environment.baseurlhostname);

  //         localStorage.setItem('BaseURLAPI', environment.base_url);

  //         this.router.navigate(['admin_dashboard'])
  //           .then(() => {
  //             window.location.reload();
  //           });

  //       }


  //       //  this.get_data();

  //     })

  //   }



  // }
   submit() {
    console.log('EH' + this.AuthUser);

    if (this.AuthUser.email == null || this.AuthUser.email == '') {
      this.auth_email = true;
      this.successfully_login = false;
      this.check_valid = false;
    }
    if (this.AuthUser.password == null || this.AuthUser.password == '') {
      this.auth_password = true;
      this.successfully_login = false;
      this.check_valid = false;
    } else {
      this.loginAuth.AuthLogin(this.AuthUser).subscribe((res) => {
        console.log("Result ",res);

        const ra = JSON.stringify(res);

        const Authdata = JSON.parse(ra);
        console.log('Auth12', Authdata);

        if (Authdata.data == 'Incorrect Password') {
          console.log('AuthData', Authdata);
          this.check_valid = true;

          this.color = 'danger';
          this.successfully_login = 'Invalid email or password!';
        } else {
          this.color = 'success';
          this.successfully_login = 'Login Successfully...';
          localStorage.removeItem('id');
          console.log('AuthData', Authdata);
          this.check_valid = true;

          localStorage.setItem('id', Authdata.data[0]._id);

          localStorage.setItem('baseurlhostname', environment.baseurlhostname);

          localStorage.setItem('BaseURLAPI', environment.base_url);

          //    this.router.navigate(['admin_dashboard'])
          //  .then(() => {
          //    window.location.reload();
          //  });

          
         setTimeout(() => {
          this.router.navigate(['admin_dashboard'])
            .then(() => {
              window.location.reload();
            });
        }, 2000);
      }
    },(error) => {
     
          if (error.status === 401) {

            this.check_valid = true;

          this.color = 'danger';
          this.successfully_login = 'Invalid email or password!';
          }

      });
    }
  }


}