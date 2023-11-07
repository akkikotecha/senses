import { Component, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
declare var google: any; // Declare the global google object

@Component({
  selector: 'app-about-two',
  templateUrl: './about-two.component.html',
  styleUrls: ['./about-two.component.css'],
})
export class AboutTwoComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) {
    setTimeout(() => {
      this.isLoading = false;

      const paramValue = localStorage.getItem('mapClick');
      if (paramValue == 'whoWeAre') {
        setTimeout(() => {
          this.scroll();
          localStorage.removeItem('mapClick');
        }, 1000);
      }
      console.log('false');
    }, 1000);
    setTimeout(function () {
      if (window.matchMedia("(max-width: 767px)").matches) {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 1px 0px",
        });
      } else {

        $(".header-main").css({
          background: "#fff",
          border: "2px solid #ededed",
          padding: "14px 0px 20px 0px",
        });
      }


      $('.header-top').css({ background: '#fff', padding: '5px 0px 5px 0px' });
      $('.sticky_color').addClass('sticky_add_color');
      $('.search-field').css({
        'background-image': "url('./assets/search.png')",
      });
      $('.logo img').css({ 'max-width': '170px' });
      $('.logo_style').attr('src', './assets/SENSES LOGO.svg');
      $('#mumbaiMap').click();
      $('.Headerbutton').removeClass('button')
      $('.Headerbutton').addClass('button_black')
    }, 1100);
  }
  isLoading: boolean = true;

  map: any;
  mapMarkerIcon: string = './assets/pin.png';
  ngOnInit(): void {
    this.titleService.setTitle('About Us | Senses Akustik');
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Us | Senses Akustik',
    });

    // Set the dynamic description
    this.meta.updateTag({
      name: 'og:description',
      content:
        'Embracing sustainable innovation and bringing meaningful change in peoples lives. Our products are the reflection of our forward-thinking approach.',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Embracing sustainable innovation and bringing meaningful change in peoples lives. Our products are the reflection of our forward-thinking approach.',
    });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.scroll();
    // }, 1000);
  }

  scroll() {
    const element = document.getElementById('whoWeAre');
    if (element) {
      // const rect = element.getBoundingClientRect();
      // const offset = rect.top + window.scrollY;
      // window.scrollTo({ top: offset, behavior: 'smooth' });
      const offset = 100; // Adjust the offset value as needed
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth',
      });
    }
  }

  handleMapMumbai() {
    const mapOptions = {
      center: { lat: 19.0834753, lng: 72.7870962 }, // Set the initial map center coordinates
      zoom: 10, // Set the initial zoom level
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const markerOptions = {
      position: { lat: 19.1450465, lng: 72.8338796 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    new google.maps.Marker(markerOptions);

    // Marker 2
    const markerOptions2 = {
      position: { lat: 12.9748669, lng: 77.6138136 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };
    const marker2 = new google.maps.Marker(markerOptions2);
    const markerOptions23 = {
      position: { lat: 1.3344923, lng: 103.740258 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      // icon: this.mapMarkerIcon,
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker23 = new google.maps.Marker(markerOptions23);
    const markerOptions24 = {
      position: { lat: 42.1913535, lng: -71.8614438 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker = new google.maps.Marker(markerOptions24);
  }
  handleMapSingapore() {
    const mapOptions = {
      center: { lat: 1.3345125, lng: 103.7398654 }, // Set the initial map center coordinates
      zoom: 10, // Set the initial zoom level
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const markerOptions = {
      position: { lat: 19.1450465, lng: 72.8338796 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    new google.maps.Marker(markerOptions);

    // Marker 2
    const markerOptions2 = {
      position: { lat: 12.9748669, lng: 77.6138136 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };
    const marker2 = new google.maps.Marker(markerOptions2);
    const markerOptions23 = {
      position: { lat: 1.3344923, lng: 103.740258 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      // icon: this.mapMarkerIcon,
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker23 = new google.maps.Marker(markerOptions23);
    const markerOptions24 = {
      position: { lat: 42.1913535, lng: -71.8614438 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker = new google.maps.Marker(markerOptions24);
  }
  handleMapUSA() {
    const mapOptions = {
      center: { lat: 42.1913535, lng: -71.8614438 }, // Set the initial map center coordinates
      zoom: 10, // Set the initial zoom level
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const markerOptions = {
      position: { lat: 19.1450465, lng: 72.8338796 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    new google.maps.Marker(markerOptions);

    // Marker 2
    const markerOptions2 = {
      position: { lat: 12.9748669, lng: 77.6138136 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };
    const marker2 = new google.maps.Marker(markerOptions2);
    const markerOptions23 = {
      position: { lat: 1.3344923, lng: 103.740258 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      // icon: this.mapMarkerIcon,
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker23 = new google.maps.Marker(markerOptions23);
    const markerOptions24 = {
      position: { lat: 42.1913535, lng: -71.8614438 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: {
        url: this.mapMarkerIcon, // Path to the marker icon image
        scaledSize: new google.maps.Size(32, 32), // Set the desired width and height
      },
    };

    const marker = new google.maps.Marker(markerOptions24);
  }
}
