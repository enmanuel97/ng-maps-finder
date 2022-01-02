import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Popup, Map, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from './../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

	@ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  ngAfterViewInit(): void {
    if(!this.placesService.useLocation) throw new Error('No se pudo obtener la localizacion');

	  const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14
    });

    const popup = new Popup().setHTML(`
      <h6>Aqui estoy</h5>
      <span>Estoy en este lugar</span>
    `);

    new Marker({color: 'red'}).setLngLat(this.placesService.useLocation).setPopup(popup).addTo(map);

    this.mapService.setMap(map);
  }
}
