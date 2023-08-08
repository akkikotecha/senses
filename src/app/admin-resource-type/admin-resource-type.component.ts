import { Component } from '@angular/core';
import { LazyLoadingService } from '../lazy-loading.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { AdminResourceTypeServiceService } from './adminresourcetype.service';
declare var $: any;

@Component({
  selector: 'app-admin-resource-type',
  templateUrl: './admin-resource-type.component.html',
  styleUrls: ['./admin-resource-type.component.css'],
})
export class AdminResourceTypeComponent {
  color: any = '';
  successfully_login: any = '';
  check_valid: any = '';
  image: any = '';
  constructor(
    private lazyLoadService: LazyLoadingService,
    private AdminResourceType: AdminResourceTypeServiceService
  ) {}

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
        .loadScript('../../assets/assets/table/resource_type.js')
        .subscribe((_) => {});
    }, 1000);
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

          // Populate image files

          // formData.append('subCategoryName', $('#subCategoryName').val());
          formData.append('title', $('#resource-type').val());

          const file = this.image;
          //    this.image = file;

          formData.append('image', file);

          // Send the form data to the server
          this.AdminResourceType.addResourceType(formData).subscribe(
            (res: any) => {
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
            }
          );
        }
      });
      //   if(this.overview_text ==="null" || this.overview_text=== undefined || this.overview_text ===""){
      //     console.log(this.overview_text);
      //     this.overviewValidation=true
      //   }
      //   else if(this.description_value_1 ==="null" || this.description_value_1=== undefined || this.description_value_1 ===""){
      //     console.log(this.description_value_1);
      //     this.featuredOneDescValidation=true
      //   }else if(this.description_value_2 ==="null" || this.description_value_2=== undefined || this.description_value_2 ===""){
      //     console.log(this.description_value_2);
      //     this.featuredTwoDescValidation=true
      //   }
      //   else if(this.description_value_3 ==="null" || this.description_value_3=== undefined || this.description_value_3 ===""){
      //     console.log(this.description_value_3);
      //     this.featuredThreeDescValidation=true
      //   }
      //   else{
      //     Swal.fire({
      //       title: 'Are you Sure?',
      //       text: "",
      //       icon: 'warning',
      //       showCancelButton: true,
      //       confirmButtonColor: '#fd7e14',
      //       cancelButtonColor: '#d33',
      //       confirmButtonText: 'Yes'
      //     }).then((result) => {

      //       if (result.isConfirmed) {

      //         const formData = new FormData();

      //         // Populate image files
      //         this.image.forEach((file, index) => {
      //           formData.append("image", file);
      //         });

      //         this.addFeaturedOneImage.forEach((file, index) => {
      //           formData.append("featuredOneImage", file);
      //         });

      //         this.addFeaturedTwoImage.forEach((file, index) => {
      //           formData.append("featuredTwoImage", file);
      //         });

      //         this.addFeaturedThreeImage.forEach((file, index) => {
      //           formData.append("featuredThreeImage", file);
      //         });

      //         this.addsnap.forEach((file, index) => {
      //           formData.append("snapShots", file);
      //         });
      //         // const featureOneDescriptionValue = this.editorElementRef_1.nativeElement.getData();
      //         // console.log('Feature One Description:', featureOneDescriptionValue);

      // // // console.log("HE:LO "+this.overview_text.getData());
      // // ClassicEditor
      // //   .create(this.editorElementRef_1.nativeElement)
      // //   .then((editor: any) => {
      // //     this.editorInstance = editor;

      // //     editor.on('ready', () => {
      // //       console.log(editor);
      // //       const content = editor.getData();
      // //       formData.append('featuredOneDesc', content);
      // //       console.log("featuredOneDesc "+content); // Verify the retrieved content here
      // //     });
      // //   })
      // //   .catch((error: any) => {
      // //     console.error(error);
      //   // });
      //         formData.append('overview', this.overview_text);
      //         formData.append('featuredOneTitle', $('#featuredOneTitle').val() as string);
      //         formData.append('featuredOneDesc',  this.description_value_1);
      //         formData.append('featuredTwoTitle', $('#featuredTwoTitle').val() as string);
      //         formData.append('featuredTwoDesc', this.description_value_2);
      //         formData.append('featuredThreeTitle', $('#featuredThreeTitle').val() as string);
      //         formData.append('featuredThreeDesc', this.description_value_3);

      //         formData.append('category', $('#category').val());
      //         formData.append('subCategory', $('#sub_category').val());
      // console.log(JSON.stringify(formData));
      //         // Send the form data to the server
      //         this.AdminCategoryService.CategoryDetailAdd(formData).subscribe((res) => {
      //           console.log("Result ", res);
      //           const ra = JSON.stringify(res);
      //           const Authdata = JSON.parse(ra);

      //           if (Authdata.message == "Data Added Successfully") {
      //             Swal.fire({
      //               title: 'Product Detail Added Successfully...',
      //               text: '',
      //               icon: 'success',
      //               confirmButtonText: 'ok',
      //               confirmButtonColor: "#fd7e14"
      //             });

      //             this.color = "success";
      //             this.successfully_login = "Product Detail Added Successfully...";
      //             window.location.reload();
      //           } else {
      //             Swal.fire({
      //               title: 'Product Detail Not Added!!!',
      //               text: '',
      //               icon: 'error',
      //               confirmButtonText: 'ok',
      //               confirmButtonColor: "#fd7e14"
      //             });

      //             this.color = "danger";
      //             this.successfully_login = "Product Detail Not Added!!!";
      //           }
      //           this.check_valid = true;
      //         });
      //       }
      //     });
      //   }
    }
  }
  editSubmit() {
    if ($('#edit_basic-form').parsley().validate()) {
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

          // Populate image files

          // formData.append('subCategoryName', $('#subCategoryName').val());
          formData.append('title', $('#edit_resource-type').val());
          formData.append('edit_id', $('#edit_id').val());
          console.log(formData)

          const file = this.image;
          //    this.image = file;

          formData.append('image', file);

          // Send the form data to the server
          this.AdminResourceType.EditOrganizationData(formData).subscribe(
            (res: any) => {
              console.log('Result ', res);
              const ra = JSON.stringify(res);
              const Authdata = JSON.parse(ra);

              if (Authdata.message == 'Resource Updated Successfully') {
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
            }
          );
        }
      });
      //   if(this.overview_text ==="null" || this.overview_text=== undefined || this.overview_text ===""){
      //     console.log(this.overview_text);
      //     this.overviewValidation=true
      //   }
      //   else if(this.description_value_1 ==="null" || this.description_value_1=== undefined || this.description_value_1 ===""){
      //     console.log(this.description_value_1);
      //     this.featuredOneDescValidation=true
      //   }else if(this.description_value_2 ==="null" || this.description_value_2=== undefined || this.description_value_2 ===""){
      //     console.log(this.description_value_2);
      //     this.featuredTwoDescValidation=true
      //   }
      //   else if(this.description_value_3 ==="null" || this.description_value_3=== undefined || this.description_value_3 ===""){
      //     console.log(this.description_value_3);
      //     this.featuredThreeDescValidation=true
      //   }
      //   else{
      //     Swal.fire({
      //       title: 'Are you Sure?',
      //       text: "",
      //       icon: 'warning',
      //       showCancelButton: true,
      //       confirmButtonColor: '#fd7e14',
      //       cancelButtonColor: '#d33',
      //       confirmButtonText: 'Yes'
      //     }).then((result) => {

      //       if (result.isConfirmed) {

      //         const formData = new FormData();

      //         // Populate image files
      //         this.image.forEach((file, index) => {
      //           formData.append("image", file);
      //         });

      //         this.addFeaturedOneImage.forEach((file, index) => {
      //           formData.append("featuredOneImage", file);
      //         });

      //         this.addFeaturedTwoImage.forEach((file, index) => {
      //           formData.append("featuredTwoImage", file);
      //         });

      //         this.addFeaturedThreeImage.forEach((file, index) => {
      //           formData.append("featuredThreeImage", file);
      //         });

      //         this.addsnap.forEach((file, index) => {
      //           formData.append("snapShots", file);
      //         });
      //         // const featureOneDescriptionValue = this.editorElementRef_1.nativeElement.getData();
      //         // console.log('Feature One Description:', featureOneDescriptionValue);

      // // // console.log("HE:LO "+this.overview_text.getData());
      // // ClassicEditor
      // //   .create(this.editorElementRef_1.nativeElement)
      // //   .then((editor: any) => {
      // //     this.editorInstance = editor;

      // //     editor.on('ready', () => {
      // //       console.log(editor);
      // //       const content = editor.getData();
      // //       formData.append('featuredOneDesc', content);
      // //       console.log("featuredOneDesc "+content); // Verify the retrieved content here
      // //     });
      // //   })
      // //   .catch((error: any) => {
      // //     console.error(error);
      //   // });
      //         formData.append('overview', this.overview_text);
      //         formData.append('featuredOneTitle', $('#featuredOneTitle').val() as string);
      //         formData.append('featuredOneDesc',  this.description_value_1);
      //         formData.append('featuredTwoTitle', $('#featuredTwoTitle').val() as string);
      //         formData.append('featuredTwoDesc', this.description_value_2);
      //         formData.append('featuredThreeTitle', $('#featuredThreeTitle').val() as string);
      //         formData.append('featuredThreeDesc', this.description_value_3);

      //         formData.append('category', $('#category').val());
      //         formData.append('subCategory', $('#sub_category').val());
      // console.log(JSON.stringify(formData));
      //         // Send the form data to the server
      //         this.AdminCategoryService.CategoryDetailAdd(formData).subscribe((res) => {
      //           console.log("Result ", res);
      //           const ra = JSON.stringify(res);
      //           const Authdata = JSON.parse(ra);

      //           if (Authdata.message == "Data Added Successfully") {
      //             Swal.fire({
      //               title: 'Product Detail Added Successfully...',
      //               text: '',
      //               icon: 'success',
      //               confirmButtonText: 'ok',
      //               confirmButtonColor: "#fd7e14"
      //             });

      //             this.color = "success";
      //             this.successfully_login = "Product Detail Added Successfully...";
      //             window.location.reload();
      //           } else {
      //             Swal.fire({
      //               title: 'Product Detail Not Added!!!',
      //               text: '',
      //               icon: 'error',
      //               confirmButtonText: 'ok',
      //               confirmButtonColor: "#fd7e14"
      //             });

      //             this.color = "danger";
      //             this.successfully_login = "Product Detail Not Added!!!";
      //           }
      //           this.check_valid = true;
      //         });
      //       }
      //     });
      //   }
    }
  }
}
