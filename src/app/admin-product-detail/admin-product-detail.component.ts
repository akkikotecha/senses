import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { LazyLoadingService} from './lazy-loading.service'
import { environment } from 'src/environments/environment';
// import * as ClassicEditorDate from '@ckeditor/ckeditor5-build-classic';
import { NgModel } from '@angular/forms';

import Swal, {SweetAlertOptions} from 'sweetalert2';
import { AdminProductDetailService } from './admin-product-detail.service';
declare var $: any;
declare var ClassicEditor: any;
declare var CKEDITOR: any;


@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent {
  image_data:any="";

  getProjectManagerData:any='';
  pm_email:any="";
  pm_password:any="";
  pm_first_name:any="";
  pm_last_name:any="";
  pm_confirm_password:any="";
  image: File[] = [];

  addFeaturedOneImage: File[] = [];
  addFeaturedTwoImage: File[] = [];
  addFeaturedThreeImage: File[] = [];

  successfully_login:any="";
  check_valid:any="";
  color:any="";
  index:any=0;
  edit_successfully_login:any="";
  edit_color:any="";
  check_valid_data:any="";
  imageUpdate:any="";
  snapShots: File[] = [];

  featuredOneImage: File[] = [];
  featuredTwoImage: File[] = [];
  featuredThreeImage: File[] = [];
  addsnap: File[] = [];
  
  JobsiteData:any="";
  overview_text:any;
  description_value_1:any;
  description_value_2:any;
  description_value_3:any;
  editorContent: string | undefined;


  // @ViewChild('editor') editorElementRef!: ElementRef;
  @ViewChild('editor', { static: false }) editorElementRef!: ElementRef;
  @ViewChild('featureOneDescription', { static: false }) editorElementRef_1!: ElementRef;
  @ViewChild('featureTwoDescription') editorElementRef_2!: ElementRef;
  @ViewChild('featureThreeDescription') editorElementRef_3!: ElementRef;
  editorInstance: any;

  // @ViewChild('editor',{ read: NgModel }) editorModel!: NgModel;
  // @ViewChild('featureOneDescription', { read: NgModel }) editorModel_2!: NgModel;
  // @ViewChild('featureTwoDescription',{ read: NgModel }) editorModel_3!: NgModel;
  // @ViewChild('featureThreeDescription',{ read: NgModel }) editorModel_4!: NgModel;

  
  constructor(private AdminCategoryService:AdminProductDetailService,private lazyLoadService:LazyLoadingService) { }
  objectKeys = Object.keys;

  ngOnInit(): void {


    
  
    
  this.AdminCategoryService.getAllCategory().subscribe((res)=>{

    this.JobsiteData = JSON.parse(JSON.stringify(res));
   console.log(this.JobsiteData);
  });

    setTimeout(() => {

      this.lazyLoadService.loadScript('../../assets/assets/js/sweetalert.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js').subscribe(_ => { });
      this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js').subscribe(_ => { });
      
          this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.js').subscribe(_ => { });
         this.lazyLoadService.loadScript('https://kendo.cdn.telerik.com/2022.3.1109/js/kendo.all.min.js').subscribe(_ => { });
        this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.9.2/parsley.min.js').subscribe(_ => { });
        
      this.lazyLoadService.loadScript('../../assets/assets/table/categoryDetail.js').subscribe(_ => { 
      
  //       setTimeout(function(){
  //         $('textarea[name="DSC"]').ckeditor();
  //         $('#editor').ckeditor();
  //       },2000)
  // // $('#btn').on('click', function(e) {
  // //   console.log('ckeditor content: ' + $('textarea[name="DSC"]').val());
  // // })
        });
        
      
    }, 1000);

  }


  logEditorContent() {
    console.log(this.editorContent);
  }

  isEditorsInitialized: boolean = false;
  
  
  
  
  


  onChangeUpdate(event: any)
  {
    this.imageUpdate = event.target.files;
    console.log("HELLO "+JSON.stringify(event.target.files[0]));

  }
  imageChange(event: any) {
    this.image = Array.from(event.target.files);

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

    let editorInstance:any;

        ClassicEditor
        .create(document.querySelector('#editor'))
        .then((editor: { on: (arg0: string, arg1: { (): void; (): void; }) => void; model: { document: { on: (arg0: string, arg1: (evt: any, data: any) => void) => void; }; }; getData: () => any; }) => {
            // Initialization code
            console.log('Editor initialized.');
      
            editor.model.document.on('change:data', (_evt, _data) => {
              // Code to run when the document's data changes
              this.overview_text = editor.getData();

              console.log(editor.getData());
          });
        })
        .catch((error: any) => {
            console.error('Editor initialization error.', error);
        });
        ClassicEditor
        .create(document.querySelector('#editEditor'))
        .then((editor: { on: (arg0: string, arg1: { (): void; (): void; }) => void; model: { document: { on: (arg0: string, arg1: (evt: any, data: any) => void) => void; }; }; getData: () => any; }) => {
            // Initialization code
            console.log('Editor initialized.');
      
            editor.model.document.on('change:data', (_evt, _data) => {
              // Code to run when the document's data changes
              this.overview_text = editor.getData();

              console.log(editor.getData());
          });
        })
        .catch((error: any) => {
            console.error('Editor initialization error.', error);
        });

        ClassicEditor
        .create(document.querySelector('#featureOneDescription'))
        .then((editor: { on: (arg0: string, arg1: { (): void; (): void; }) => void; model: { document: { on: (arg0: string, arg1: (evt: any, data: any) => void) => void; }; }; getData: () => any; }) => {
            // Initialization code
            console.log('Editor initialized.');
      
            editor.model.document.on('change:data', (_evt, _data) => {
              // Code to run when the document's data changes
              this.description_value_1 = editor.getData();

              console.log(editor.getData());
          });
        })
        .catch((error: any) => {
            console.error('Editor initialization error.', error);
        });


        ClassicEditor
        .create(document.querySelector('#featureTwoDescription'))
        .then((editor: { on: (arg0: string, arg1: { (): void; (): void; }) => void; model: { document: { on: (arg0: string, arg1: (evt: any, data: any) => void) => void; }; }; getData: () => any; }) => {
            // Initialization code
            console.log('Editor initialized.');
      
            editor.model.document.on('change:data', (_evt, _data) => {
              // Code to run when the document's data changes
              this.description_value_2 = editor.getData();

              console.log(editor.getData());
          });
        })
        .catch((error: any) => {
            console.error('Editor initialization error.', error);
        });


        ClassicEditor
        .create(document.querySelector('#featureThreeDescription'))
        .then((editor: { on: (arg0: string, arg1: { (): void; (): void; }) => void; model: { document: { on: (arg0: string, arg1: (evt: any, data: any) => void) => void; }; }; getData: () => any; }) => {
            // Initialization code
            console.log('Editor initialized.');
      
            editor.model.document.on('change:data', (_evt, _data) => {
              // Code to run when the document's data changes
              this.description_value_3 = editor.getData();
              console.log(editor.getData());
          });
        })
        .catch((error: any) => {
            console.error('Editor initialization error.', error);
        });
}


submit() {
  if ($('#add-form').parsley().validate()) {
    Swal.fire({
      title: 'Are you Sure?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fd7e14',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();

        // Populate image files
        this.image.forEach((file, index) => {
          formData.append("image", file);
        });

        this.addFeaturedOneImage.forEach((file, index) => {
          formData.append("featuredOneImage", file);
        });

        this.addFeaturedTwoImage.forEach((file, index) => {
          formData.append("featuredTwoImage", file);
        });

        this.addFeaturedThreeImage.forEach((file, index) => {
          formData.append("featuredThreeImage", file);
        });

        this.addsnap.forEach((file, index) => {
          formData.append("snapShots", file);
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
        formData.append('featuredOneTitle', $('#featuredOneTitle').val() as string);
        formData.append('featuredOneDesc',  this.description_value_1);
        formData.append('featuredTwoTitle', $('#featuredTwoTitle').val() as string);
        formData.append('featuredTwoDesc', this.description_value_2);
        formData.append('featuredThreeTitle', $('#featuredThreeTitle').val() as string);
        formData.append('featuredThreeDesc', this.description_value_3);

        formData.append('category', $('#category').val());
        formData.append('subCategory', $('#sub_category').val());
console.log(JSON.stringify(formData));
        // Send the form data to the server
        this.AdminCategoryService.CategoryDetailAdd(formData).subscribe((res) => {
          console.log("Result ", res);
          const ra = JSON.stringify(res);
          const Authdata = JSON.parse(ra);

          if (Authdata.message == "Data Added Successfully") {
            Swal.fire({
              title: 'Product Detail Added Successfully...',
              text: '',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "success";
            this.successfully_login = "Product Detail Added Successfully...";
            window.location.reload();
          } else {
            Swal.fire({
              title: 'Product Detail Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });

            this.color = "danger";
            this.successfully_login = "Product Detail Not Added!!!";
          }
          this.check_valid = true;
        });
      }
    });
  }
}








  submitEditData()
  {
    if ($('#edit_basic-form').parsley().validate()) {  
        // console.log($('#basic-form').serializeArray());

        Swal.fire({
          title: 'Are you Sure?',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#fd7e14',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        }).then((result) => {
          if (result.isConfirmed) {
      
  
            const file = this.imageUpdate;
        //    this.image = file; 
        
            const fda =new FormData();

            fda.append('myFile',file);
            
             fda.append('select_category',"Announcement");
             fda.append('select_date',$('#edit_select_date').val());
             fda.append('title',$('#edit_title').val());
             fda.append('edit_id',$('#edit_id').val());
            
        console.log(file+" "+$('#edit_select_date').val()+" "+$('#edit_title').val()+" "+$('#edit_id').val());
            this.AdminCategoryService.EditOrganizationData(fda).subscribe((res)=>{
  
            console.log("Result ",res);
             const ra = JSON.stringify(res);
              
             const Authdata = JSON.parse(ra);
            
          //  console.log(Authdata.data[0].User[0].first_name);
  
          if(Authdata.message == "Added")
          {
            Swal.fire({
              title: 'Organization Announcement Updated Successfully...',
              text: '',
              icon: 'success',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"
            });
  
            this.color = "success";
            this.successfully_login = "Organization Announcement Updated Successfully...";
           //  this.get_data();
             window.location.reload();
            
          }else{
            Swal.fire({
              title: 'Organization Announcement Not Added!!!',
              text: '',
              icon: 'error',
              confirmButtonText: 'ok',
              confirmButtonColor: "#fd7e14"});
  
            this.color = "danger";
            this.successfully_login = "Organization Announcement Not Added!!!";
          }
  
          
          this.check_valid = true;
       
           })
        }
        })
  
      }

// this.color = "success";
// this.successfully_login = "Project Manager Added Successfully...";


  }

}
