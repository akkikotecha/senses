import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { LazyLoadingService } from './lazy-loading.service';
import { environment } from 'src/environments/environment';
// import * as ClassicEditorDate from '@ckeditor/ckeditor5-build-classic';
import { NgModel } from '@angular/forms';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { AdminProductDetailService } from './admin-product-detail.service';
declare var $: any;
declare var ClassicEditor: any;
declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css'],
})
export class AdminProductDetailComponent {
  image_data: any = '';

  getProjectManagerData: any = '';
  pm_email: any = '';
  pm_password: any = '';
  pm_first_name: any = '';
  pm_last_name: any = '';
  pm_confirm_password: any = '';
  image: File[] = [];
  imageMobile: File[] = [];

  overviewValidation: any = false;
  featuredOneDescValidation: any = false;
  featuredTwoDescValidation: any = false;
  featuredThreeDescValidation: any = false;
  addFeaturedOneImage: File[] = [];
  addFeaturedTwoImage: File[] = [];
  addFeaturedThreeImage: File[] = [];

  successfully_login: any = '';
  check_valid: any = '';
  color: any = '';
  index: any = 0;
  edit_successfully_login: any = '';
  edit_color: any = '';
  check_valid_data: any = '';
  imageUpdate: any = '';
  snapShots: File[] = [];

  featuredOneImage: File[] = [];
  featuredTwoImage: File[] = [];
  featuredThreeImage: File[] = [];
  addsnap: File[] = [];

  JobsiteData: any = '';
  related_product: any = '';

  overview_text: any;
  description_value_1: any;
  description_value_2: any;
  description_value_3: any;
  editorContent: string | undefined;

  // @ViewChild('editor') editorElementRef!: ElementRef;
  @ViewChild('editor', { static: false }) editorElementRef!: ElementRef;
  @ViewChild('featureOneDescription', { static: false })
  editorElementRef_1!: ElementRef;
  @ViewChild('featureTwoDescription') editorElementRef_2!: ElementRef;
  @ViewChild('featureThreeDescription') editorElementRef_3!: ElementRef;
  editorInstance: any;

  // @ViewChild('editor',{ read: NgModel }) editorModel!: NgModel;
  // @ViewChild('featureOneDescription', { read: NgModel }) editorModel_2!: NgModel;
  // @ViewChild('featureTwoDescription',{ read: NgModel }) editorModel_3!: NgModel;
  // @ViewChild('featureThreeDescription',{ read: NgModel }) editorModel_4!: NgModel;

  constructor(
    private AdminCategoryService: AdminProductDetailService,
    private lazyLoadService: LazyLoadingService,
    private cdRef: ChangeDetectorRef
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

    this.AdminCategoryService.getAllCategory().subscribe((res) => {
      this.JobsiteData = JSON.parse(JSON.stringify(res));
      // this.related_product = JSON.parse(JSON.stringify(res));

      console.log(this.JobsiteData);
    });

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
        .loadScript('../../assets/assets/table/select.js')
        .subscribe((_) => { });

      this.lazyLoadService
        .loadScript('../../assets/assets/table/categoryDetail.js')
        .subscribe((_) => {
          //       setTimeout(function(){
          //         $('textarea[name="DSC"]').ckeditor();
          //         $('#editor').ckeditor();
          //       },2000)
          // // $('#btn').on('click', function(e) {
          // //   console.log('ckeditor content: ' + $('textarea[name="DSC"]').val());
          // // })

          $(document).ready(function () {
            setTimeout(function () {
              $('.select2-multiple').select2({
                theme: 'bootstrap',
                placeholder: 'Select a Employee',
                containerCssClass: ':all:',
              });

              $('.select2-multiple-jobiste').select2({
                theme: 'bootstrap',
                placeholder: 'Select a Jobsite',
                containerCssClass: ':all:',
              });
            }, 500);
          });
        });
    }, 1000);
  }

  logEditorContent() {
    console.log(this.editorContent);
  }

  isEditorsInitialized: boolean = false;

  onChangeUpdate(event: any) {
    this.imageUpdate = event.target.files;
    console.log('HELLO ' + JSON.stringify(event.target.files[0]));
  }
  imageChange(event: any) {
    this.image = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }

  imageChangeMobile(event: any) {
    this.imageMobile = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }

  featuredOneImageChange(event: any) {
    this.addFeaturedOneImage = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }

  featuredTwoImageChange(event: any) {
    this.addFeaturedTwoImage = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }

  featuredThreeImageChange(event: any) {
    this.addFeaturedThreeImage = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }

  snapChange(event: any) {
    this.addsnap = Array.from(event.target.files);

    // console.log();
    //  this.image = event.target.files;
    //  console.log("HELLO "+JSON.stringify(event.target.files[0]));

    // Store the array of selected files in your component's state or variable
  }
  onChange(value: any) {
    // console.log("HELLO");
    console.log(value.target.value);
    // varid = ;

    this.AdminCategoryService.getSUbCategoryIdPass(
      value.target.value
    ).subscribe((res) => {
      // console.log("JSON " + JSON.stringify(res));
      const data = JSON.parse(JSON.stringify(res)); // Extract the 'data' property from the response
      // if (Array.isArray(data)) { // Check if 'data' is an array
      console.log('DATA ' + JSON.stringify(data));
      // this.related_product = data;
      // $('#select_multiple_data').val(null).trigger('change');
      //  setTimeout(function(){
      $('#select_multiple_data').empty().trigger('change');

      for (const item of data) {
        // console.log("LLOOP "+item.subCategoryName, item._id.toString());
        const option = new Option(item.subCategoryName, item._id.toString());
        $('#select_multiple_data').append(option);
      }

      $('#select_multiple_data').trigger('change');
      //  },2000)
    });

    // Append new options to the Select2 dropdown
    // $.each(newData, function(index:any, value:any) {
    //   $('#select2-multiple-input-sm').append($('<option>').text(value.text).attr('value', value.id));
    // });

    // // Trigger the Select2 to update the dropdown
    // $('#select2-multiple-input-sm').trigger('change');

    //  console.log(this.JobsiteData);
    // });
  }

  onChangeCategory(event: any) {
    // this.AdminCategoryService.SubCategory(event.target.value).subscribe((res) => {
    //   console.log("Result ", res);
    //   const ra = JSON.stringify(res);
    //   const Authdata = JSON.parse(ra);
    // });
  }
  ngAfterViewInit() {
    // ClassicEditor
    //   .create(this.editorElementRef.nativeElement)
    //   .then((editor: any) => {
    //     editor.on('change', () => {
    //       const data = editor.getData();
    //       console.log(data); // Do something with the changed data
    //       this.overview_text = data; // Store the data in a variable if needed
    //     });
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

    // ClassicEditor
    //   .create(this.editorElementRef_1.nativeElement)
    //   .then((editor: any) => {
    //     editor.on('change', () => {
    //       const data = editor.getData();
    //       console.log(data); // Do something with the changed data
    //       this.description_value_1 = data; // Store the data in a variable if needed
    //     });
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

    // ClassicEditor
    //   .create(this.editorElementRef_2.nativeElement)
    //   .then((editor: any) => {
    //     editor.on('change', () => {
    //       const data = editor.getData();
    //       console.log(data); // Do something with the changed data
    //       this.description_value_2 = data; // Store the data in a variable if needed
    //     });
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

    // ClassicEditor
    //   .create(this.editorElementRef_3.nativeElement)
    //   .then((editor: any) => {
    //     editor.on('change', () => {
    //       const data = editor.getData();
    //       console.log(data); // Do something with the changed data
    //       this.description_value_3 = data; // Store the data in a variable if needed
    //     });
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });

    let editorInstance: any;

    ClassicEditor.create(document.querySelector('#editor'))
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            this.overview_text = editor.getData();


            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });

    const initialData = sessionStorage.getItem("productDetailsOverview");
    ClassicEditor.create(document.querySelector('#editEditor'), {
      initialData: initialData
    })
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsOverview", "");
            this.overview_text = editor.getData();

            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });

    ClassicEditor.create(document.querySelector('#featureOneDescription'))
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsFeatureOneDescription", "");
            this.description_value_1 = editor.getData();

            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });

    const initiaDataFeatureOneData = '';
    ClassicEditor.create(document.querySelector('#featureTwoDescription'), {
      initialData: initiaDataFeatureOneData
    })
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsFeatureTwoDescription", "");
            this.description_value_2 = editor.getData();

            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });


    const initiaDataFeatureOne = sessionStorage.getItem("productDetailsFeatureOneDescription");
    ClassicEditor.create(document.querySelector('#edit_featureOneDescription'), {
      initialData: initiaDataFeatureOne
    })
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.', editor.getData);

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsFeatureOneDescription", "");
            this.description_value_1 = editor.getData();

            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });
    const initiaDataFeatureTwo = sessionStorage.getItem("productDetailsFeatureTwoDescription");
    ClassicEditor.create(document.querySelector('#edit_featureTwoDescription'), {
      initialData: initiaDataFeatureTwo
    })
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsFeatureTwoDescription", "");
            this.description_value_2 = editor.getData();


            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });

    const initiaDataFeatureThree = sessionStorage.getItem("productDetailsFeatureTwoDescription");
    ClassicEditor.create(document.querySelector('#edit_featureThreeDescription'), {
      initialData: initiaDataFeatureThree
    })
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            sessionStorage.setItem("productDetailsFeatureThreeDescription", "");
            this.description_value_3 = editor.getData();

            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });

    ClassicEditor.create(document.querySelector('#featureThreeDescription'))
      .then(
        (editor: {
          on: (arg0: string, arg1: { (): void; (): void }) => void;
          model: {
            document: {
              on: (arg0: string, arg1: (evt: any, data: any) => void) => void;
            };
          };
          getData: () => any;
        }) => {
          // Initialization code
          console.log('Editor initialized.');

          editor.model.document.on('change:data', (_evt, _data) => {
            // Code to run when the document's data changes
            this.description_value_3 = editor.getData();
            console.log(editor.getData());
          });
        }
      )
      .catch((error: any) => {
        console.error('Editor initialization error.', error);
      });
  }

  submit() {
    // $.each(multi, function (indexes:any, values:any){
    //     //console.log("values : "+values);
    //     ResponseData += values+',';
    // });
    // strVal = ResponseData.slice(0, -1);
    // console.log("multi : "+multi);
    // return false;
    if ($('#add-form').parsley().validate()) {
      console.log('before if', this.overview_text);
      if (
        this.overview_text === 'null' ||
        this.overview_text === undefined ||
        this.overview_text === ''
      ) {
        console.log(this.overview_text);
        this.overviewValidation = true;
      } else if (
        this.description_value_1 === 'null' ||
        this.description_value_1 === undefined ||
        this.description_value_1 === ''
      ) {
        console.log(this.description_value_1);
        this.featuredOneDescValidation = true;
      } else if (
        this.description_value_2 === 'null' ||
        this.description_value_2 === undefined ||
        this.description_value_2 === ''
      ) {
        console.log(this.description_value_2);
        this.featuredTwoDescValidation = true;
      } else if (
        this.description_value_3 === 'null' ||
        this.description_value_3 === undefined ||
        this.description_value_3 === ''
      ) {
        console.log(this.description_value_3);
        this.featuredThreeDescValidation = true;
      } else {
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
            const formData = new FormData();

            // Populate image files
            this.image.forEach((file, index) => {
              formData.append('image', file);
            });

            this.imageMobile.forEach((file, index) => {
              formData.append('Mobileimage', file);
            });

            this.addFeaturedOneImage.forEach((file, index) => {
              formData.append('featuredOneImage', file);
            });

            this.addFeaturedTwoImage.forEach((file, index) => {
              formData.append('featuredTwoImage', file);
            });

            this.addFeaturedThreeImage.forEach((file, index) => {
              formData.append('featuredThreeImage', file);
            });

            this.addsnap.forEach((file, index) => {
              formData.append('snapShots', file);
            });
            // const featureOneDescriptionValue = this.editorElementRef_1.nativeElement.getData();
            // console.log('Feature One Description:', featureOneDescriptionValue);

            // // console.log("HE:LO "+this.overview_text.getData());
            // ClassicEditor
            //   .create(this.editorElementRef_1.nativeElement)
            //   .then((editor: any) => {
            //     this.editorInstance = editor;

            //     editor.on('ready', () => {
            //       console.log(editor);
            //       const content = editor.getData();
            //       formData.append('featuredOneDesc', content);
            //       console.log("featuredOneDesc "+content); // Verify the retrieved content here
            //     });
            //   })
            //   .catch((error: any) => {
            //     console.error(error);
            // });
            formData.append('overview', this.overview_text);
            formData.append(
              'featuredOneTitle',
              $('#featuredOneTitle').val() as string
            );
            formData.append('featuredOneDesc', this.description_value_1);
            formData.append(
              'featuredTwoTitle',
              $('#featuredTwoTitle').val() as string
            );
            formData.append('featuredTwoDesc', this.description_value_2);
            formData.append(
              'featuredThreeTitle',
              $('#featuredThreeTitle').val() as string
            );
            formData.append('featuredThreeDesc', this.description_value_3);

            formData.append('category', $('#category').val());
            formData.append('subCategory', $('#sub_category').val());
            formData.append(
              'metaTitle',
              $('#productMetaTitle').val() as string
            );
            formData.append(
              'metaDescription',
              $('#productMetaDescription').val() as string
            );
            var ResponseData = '';
            var strVal = '';
            $.each(
              $('.select_multiple_data').val(),
              function (indexes: any, values: any) {
                //console.log("values : "+values);
                ResponseData += values + ',';
              }
            );
            strVal = ResponseData.slice(0, -1);
            // console.log("multi : "+multi);
            // });
            formData.append('related_product', strVal);
            // var multi = ;

            console.log(JSON.stringify(formData));
            // Send the form data to the server
            this.AdminCategoryService.CategoryDetailAdd(formData).subscribe(
              (res) => {
                console.log('Result ', res);
                const ra = JSON.stringify(res);
                const Authdata = JSON.parse(ra);

                if (Authdata.message == 'Data Added Successfully') {
                  Swal.fire({
                    title: 'Product Detail Added Successfully...',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'success';
                  this.successfully_login =
                    'Product Detail Added Successfully...';
                  window.location.reload();
                } else {
                  Swal.fire({
                    title: 'Product Detail Not Added!!!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'danger';
                  this.successfully_login = 'Product Detail Not Added!!!';
                }
                this.check_valid = true;
              }
            );
          }
        });
      }
    }
  }

  submitEditData() {
    // console.log("HELO ", $('#edit_featureOneDescription').Editor("getText"));
    // if ($('#edit_basic-form').parsley().validate()) {
    //   // console.log($('#basic-form').serializeArray());

    //   Swal.fire({
    //     title: 'Are you Sure?',
    //     text: '',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#fd7e14',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       const file = this.imageUpdate;
    //       //    this.image = file;

    //       const fda = new FormData();

    //       fda.append('myFile', file);

    //       fda.append('select_category', 'Announcement');
    //       fda.append('select_date', $('#edit_select_date').val());
    //       fda.append('title', $('#edit_title').val());
    //       fda.append('edit_id', $('#edit_id').val());

    //       console.log(
    //         file +
    //           ' ' +
    //           $('#edit_select_date').val() +
    //           ' ' +
    //           $('#edit_title').val() +
    //           ' ' +
    //           $('#edit_id').val()
    //       );
    //       this.AdminCategoryService.EditOrganizationData(fda).subscribe(
    //         (res) => {
    //           console.log('Result ', res);
    //           const ra = JSON.stringify(res);

    //           const Authdata = JSON.parse(ra);

    //           //  console.log(Authdata.data[0].User[0].first_name);

    //           if (Authdata.message == 'Added') {
    //             Swal.fire({
    //               title: 'Organization Announcement Updated Successfully...',
    //               text: '',
    //               icon: 'success',
    //               confirmButtonText: 'ok',
    //               confirmButtonColor: '#fd7e14',
    //             });

    //             this.color = 'success';
    //             this.successfully_login =
    //               'Organization Announcement Updated Successfully...';
    //             //  this.get_data();
    //             window.location.reload();
    //           } else {
    //             Swal.fire({
    //               title: 'Organization Announcement Not Added!!!',
    //               text: '',
    //               icon: 'error',
    //               confirmButtonText: 'ok',
    //               confirmButtonColor: '#fd7e14',
    //             });

    //             this.color = 'danger';
    //             this.successfully_login =
    //               'Organization Announcement Not Added!!!';
    //           }

    //           this.check_valid = true;
    //         }
    //       );
    //     }
    //   });
    // }

    if ($('#edit_basic-form').parsley().validate()) {
      console.log('before if', this.overview_text);

      if (sessionStorage.getItem("productDetailsOverview") != "") {
        this.overview_text = sessionStorage.getItem("productDetailsOverview");
      }
      else {
        this.overview_text = "";
      }

      if (sessionStorage.getItem("productDetailsFeatureOneDescription") != "") {
        this.description_value_1 = sessionStorage.getItem("productDetailsFeatureOneDescription");
      }
      else {
        this.description_value_1 = "";
      }

      if (sessionStorage.getItem("productDetailsFeatureTwoDescription") != "") {
        this.description_value_2 = sessionStorage.getItem("productDetailsFeatureTwoDescription");
      }
      else {
        this.description_value_2 = "";
      }

      if (sessionStorage.getItem("productDetailsFeatureThreeDescription") != "") {
        this.description_value_3 = sessionStorage.getItem("productDetailsFeatureThreeDescription");
      }
      else {
        this.description_value_3 = "";
      }

      if (
        this.overview_text === 'null' ||
        this.overview_text === undefined ||
        this.overview_text === ''
      ) {
        console.log("1 ", this.overview_text);
        this.overviewValidation = true;
      } else if (
        this.description_value_1 === 'null' ||
        this.description_value_1 === undefined ||
        this.description_value_1 === ''
      ) {
        console.log("2 ", this.description_value_1);
        this.featuredOneDescValidation = true;
      } else if (
        this.description_value_2 === 'null' ||
        this.description_value_2 === undefined ||
        this.description_value_2 === ''
      ) {
        console.log("3 ", this.description_value_2);
        this.featuredTwoDescValidation = true;
      } else if (
        this.description_value_3 === 'null' ||
        this.description_value_3 === undefined ||
        this.description_value_3 === ''
      ) {
        console.log("4 ", this.description_value_3);
        this.featuredThreeDescValidation = true;
      } else {
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
            const formData = new FormData();

            // Populate image files
            this.image.forEach((file, index) => {
              formData.append('image', file);
            });

            this.imageMobile.forEach((file, index) => {
              formData.append('Mobileimage', file);
            });

            this.addFeaturedOneImage.forEach((file, index) => {
              formData.append('featuredOneImage', file);
            });

            this.addFeaturedTwoImage.forEach((file, index) => {
              formData.append('featuredTwoImage', file);
            });

            this.addFeaturedThreeImage.forEach((file, index) => {
              formData.append('featuredThreeImage', file);
            });

            this.addsnap.forEach((file, index) => {
              formData.append('snapShots', file);
            });
            // const featureOneDescriptionValue = this.editorElementRef_1.nativeElement.getData();
            // console.log('Feature One Description:', featureOneDescriptionValue);

            // // console.log("HE:LO "+this.overview_text.getData());
            // ClassicEditor
            //   .create(this.editorElementRef_1.nativeElement)
            //   .then((editor: any) => {
            //     this.editorInstance = editor;

            //     editor.on('ready', () => {
            //       console.log(editor);
            //       const content = editor.getData();
            //       formData.append('featuredOneDesc', content);
            //       console.log("featuredOneDesc "+content); // Verify the retrieved content here
            //     });
            //   })
            //   .catch((error: any) => {
            //     console.error(error);
            // });
            formData.append('overview', this.overview_text);
            formData.append(
              'featuredOneTitle',
              $('#updatededit_featuredOneTitle').val() as string
            );
            formData.append('featuredOneDesc', this.description_value_1);
            formData.append(
              'featuredTwoTitle',
              $('#updatededit_featuredTwoTitle').val() as string
            );
            formData.append('featuredTwoDesc', this.description_value_2);
            formData.append(
              'featuredThreeTitle',
              $('#updatededit_featuredThreeTitle').val() as string
            );
            formData.append('featuredThreeDesc', this.description_value_3);

            formData.append('category', $('#category').val());
            formData.append('subCategory', $('#edit_sub_category').val());
            formData.append(
              'metaTitle',
              $('#updateeditproductMetaTitle').val() as string
            );
            formData.append(
              'metaDescription',
              $('#UpdateeditproductMetaDescription').val() as string
            );
            formData.append(
              'edit_id',
              $('#edit_id').val() as string
            );
            var ResponseData = '';
            var strVal = '';
            $.each(
              $('.select_multiple_data').val(),
              function (indexes: any, values: any) {
                //console.log("values : "+values);
                ResponseData += values + ',';
              }
            );
            strVal = ResponseData.slice(0, -1);
            // console.log("multi : "+multi);
            // });
            formData.append('related_product', strVal);
            // var multi = ;

            console.log(JSON.stringify(formData));
            // Send the form data to the server
            this.AdminCategoryService.EditOrganizationData(formData).subscribe(
              (res) => {
                console.log('Result ', res);
                const ra = JSON.stringify(res);
                const Authdata = JSON.parse(ra);

                if (Authdata.message == 'Data Updated Successfully') {
                  Swal.fire({
                    title: 'Product Detail Updated Successfully...',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'success';
                  this.successfully_login =
                    'Product Detail Updated Successfully...';
                  window.location.reload();
                } else {
                  Swal.fire({
                    title: 'Product Detail Not Updated!!!',
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'ok',
                    confirmButtonColor: '#fd7e14',
                  });

                  this.color = 'danger';
                  this.successfully_login = 'Product Detail Not Updated!!!';
                }
                this.check_valid = true;
              }
            );
          }
        });
      }
    }

    // this.color = "success";
    // this.successfully_login = "Project Manager Added Successfully...";
  }
}
