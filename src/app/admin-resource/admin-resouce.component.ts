import { Component } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { AdminResourceService } from './admin-resouce.service';

declare var $: any;

@Component({
  selector: 'app-admin-resouce',
  templateUrl: './admin-resouce.component.html',
  styleUrls: ['./admin-resouce.component.css'],
})
export class AdminResouceComponent {
  constructor(
    private lazyLoadService: LazyLoadingService,
    private adminResource: AdminResourceService
  ) {}
  color: any = '';
  successfully_login: any = '';
  check_valid: any = '';
  image: any = '';
  fabricsID: any = '';
  categoryData: any = '';
  productData: any = '';
  resourceType: any = '';
  resourceSubType: any = '';
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
    this.adminResource.getAllCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryData = JSON.parse(JSON.stringify(res));
      console.log(this.categoryData);
    });
    this.adminResource.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.productData = JSON.parse(JSON.stringify(res));
      console.log(this.categoryData);
    });
    this.adminResource.getAllResourceType().subscribe((res: any) => {
      console.log(res);
      this.resourceType = JSON.parse(JSON.stringify(res));
      console.log(this.categoryData);
    });
    this.adminResource.getAllResourceSubType().subscribe((res: any) => {
      console.log(res);
      this.resourceSubType = JSON.parse(JSON.stringify(res));
      console.log(this.categoryData);
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
        .loadScript('../../assets/assets/table/resource.js')
        .subscribe((_) => {});
    }, 1000);
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
  resourceSubTypeChange(event: any) {
    this.fabricsID = event.target.value;
    console.log(event.target.value);
  }
  onChange(event: any) {
    // console.log();
    this.image = event.target.files[0];
    console.log('HELLO ' + JSON.stringify(event.target.files[0]));
  }
  submit() {
    if ($('#add-form').parsley().validate()) {
      console.log('before if' + $('#resource-type').val());
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
          const formData = new FormData();
          const file = this.image;

          // Populate image files

          // formData.append('subCategoryName', $('#subCategoryName').val());
          formData.append('title', $('#title').val());
          if ($('#category').val() == '') {
            formData.append('category', '');
          } else {
            formData.append('category', $('#category').val());
          }
          if ($('#product').val() == '') {
            formData.append('product', '');
          } else {
            formData.append('product', $('#product').val());
          }
          formData.append('resourceType', $('#resource-type').val());
          formData.append('fabricsType', $('#fabricsType').val());
          formData.append('resourceSubType', $('#resource-sub-type').val());

          //    this.image = file;

          formData.append('image', file);

          // Send the form data to the server
          this.adminResource.addResource(formData).subscribe((res: any) => {
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
    if ($('#edit_basic-form').parsley().validate()) {
      // console.log('before if' + $('#resource-type').val());
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
          const formData = new FormData();
          const file = this.image;

          // Populate image files

          // formData.append('subCategoryName', $('#subCategoryName').val());
          formData.append('title', $('#edit_title').val());
          if ($('#category').val() == '') {
            formData.append('category', '');
          } else {
            formData.append('category', $('#edit_category').val());
          }
          if ($('#product').val() == '') {
            formData.append('product', '');
          } else {
            formData.append('product', $('#edit_product').val());
          }
          formData.append('resourceType', $('#edit_resource-type').val());
          formData.append('fabricsType', $('#edit_fabricsType').val());
          formData.append('resourceSubType', $('#edit_resource-sub-type').val());
          formData.append('edit_id', $('#edit_id').val());

          //    this.image = file;

          formData.append('image', file);

          // Send the form data to the server
          this.adminResource.EditOrganizationData(formData).subscribe((res: any) => {
            console.log('Result ', res);
            const ra = JSON.stringify(res);
            const Authdata = JSON.parse(ra);

            if (Authdata.message == 'Data Updated Successfully') {
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
