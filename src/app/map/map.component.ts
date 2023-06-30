import { Component, OnInit } from '@angular/core';

declare var google: any; // Declare the global google object

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;
  mapCenter: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  mapZoom = 12;
  markerPosition: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 19.0834753, lng: 72.7870962 }, // Set the initial map center coordinates
      zoom: 10, // Set the initial zoom level
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const markerOptions = {
      position: { lat: 19.1450465, lng: 72.8338796 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: 'favicon.ico',
    };

    const marker = new google.maps.Marker(markerOptions);
    const markerOptions1 = {
      position: { lat: 19.1450465, lng: 72.8338796 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: 'favicon.ico', // Replace with the path to the custom marker icon for Marker 1
    };
    const marker1 = new google.maps.Marker(markerOptions1);

    // Marker 2
    const markerOptions2 = {
      position: { lat: 12.9748669, lng: 77.6138136 }, // Set the marker position coordinates
      map: this.map, // Set the map to which the marker should be added
      title: 'Marker Title', // Set the title of the marker (optional)
      icon: 'favicon.ico', // Replace with the path to the custom marker icon for Marker 2
    };
    const marker2 = new google.maps.Marker(markerOptions2);
  }
}
