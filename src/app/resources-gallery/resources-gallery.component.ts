import { Component } from '@angular/core';
declare var $: any;

import { LazyLoadingService } from './lazy-loading.service';
@Component({
  selector: 'app-resources-gallery',
  templateUrl: './resources-gallery.component.html',
  styleUrls: ['./resources-gallery.component.css'],
})
export class ResourcesGalleryComponent {
  constructor(private lazyLoadService: LazyLoadingService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.lazyLoadService
        .loadScript('../../assets/assets/table/resourcesGalley.js')
        .subscribe((_) => {
          //       setTimeout(function(){
          //         $('textarea[name="DSC"]').ckeditor();
          //         $('#editor').ckeditor();
          //       },2000)
          // // $('#btn').on('click', function(e) {
          // //   console.log('ckeditor content: ' + $('textarea[name="DSC"]').val());
          // // })
        });
    }, 1000);

    setTimeout(function () {
      console.log('HELLO');
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
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
    }, 2000);
  }

  // resourceService.getResourcesByType(id).subscribe(
  //   (data) => {
  //     this.resources = data;
  //     console.log(this.resources);
  //   },
  //   (error) => {
  //     console.error('Error fetching resources:', error);
  //   }
  // );
}
