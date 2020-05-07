import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements AfterViewInit {
  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 51.256214, 7.150764 ],
      zoom: 12
    });
  }

  constructor() {}

  ngAfterViewInit(): void {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  // --- Google Satellite Tiles ---
  //   const tiles = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
  //     maxZoom: 20,
  //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  // });

// // -- Google Hybrid Tiles --
//   const tiles =  L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// });

    this.initMap();
    tiles.addTo(this.map);
  }
}
