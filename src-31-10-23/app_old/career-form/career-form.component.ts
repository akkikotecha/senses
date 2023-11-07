import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LazyLoadingService } from './lazy-loading.service'

import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { CareerFormService } from './career-form.service';
declare var $: any;


@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.css']
})
export class CareerFormComponent {

  getScreenWidth: any = "";
  isLoggedIn: any = "";
  islaptop: any = "";
  url_id: any;
  image: any;
  color: any;
  successfully_login: any;
  check_valid: any;


  constructor(private router: ActivatedRoute, private lazyLoadService: LazyLoadingService, private careerForm: CareerFormService) {
    this.router.params.subscribe(params => this.url_id = params['id']);
    console.log("HELLO " + this.url_id);

    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);

    if (this.getScreenWidth <= 780) {
      this.isLoggedIn = true;
      this.islaptop = false;

    } else {
      this.islaptop = true;
      this.isLoggedIn = false;
    }

  }

  ngOnInit(): void {
    setTimeout(() => {

      this.lazyLoadService.loadScript('../../assets/assets/js/sweetalert.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js').subscribe(_ => {
      });
    }, 1000);

    setTimeout(function () {
      $('.header-main').css({
        background: '#fff',
        border: '2px solid #ededed',
        padding: '9px 0px 11px 0px',
      });
      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $(".logo_style").attr("src", "./assets/SENSES LOGO.svg");
      $('.logo img').css({ 'max-width': '170px' });
    }, 500);


  }
  upload(event: any) {
    this.image = event.target.files[0];
    console.log(this.image);
  }



  submit() {


    if ($('#add-form').parsley().validate()) {

      //console.log("AP : "+$('#add-form').serializeArray);

      const file = this.image;
      //    this.image = file; 

      const fd = new FormData();
      fd.append('myFile', file);
      fd.append('form_id', this.url_id);
      fd.append('fullname', $('#fullname').val());
      fd.append('email', $('#email').val());
      fd.append('mobile_number', $('#mobile_number').val());
      fd.append('current_job', $('#current_job').val());
      fd.append('designation', $('#designation').val());
      fd.append('experience', $('#experience').val());
      fd.append('current_ctc', $('#current_ctc').val());
      fd.append('expected_ctc', $('#expected_ctc').val());

      this.careerForm.addFormData(fd).subscribe((res) => {

        //console.log("Result ",res);
        const ra = JSON.stringify(res);


        const Authdata = JSON.parse(ra);


        if (Authdata.message == "Added") {
          Swal.fire({
            title: 'Form Submitted Successfully...',
            text: '',
            icon: 'success',
            confirmButtonText: 'ok',
            confirmButtonColor: "#fd7e14"
          });

          $('#add-form')[0].reset();

          this.image = "";
          // window.location.reload();

        } else {
          // Swal.fire({
          //   title: 'In The Media Not Added!!!',
          //   text: '',
          //   icon: 'error',
          //   confirmButtonText: 'ok',
          //   confirmButtonColor: "#fd7e14"});

          this.color = "danger";
          this.successfully_login = "Contact Data Not Added.!!!";
          this.image = "";

        }


        this.check_valid = true;

      })
    }

  }

}
