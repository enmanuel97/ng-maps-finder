import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';
import { MapService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  goToMyLocation() {
	if(!this.placesService.isUserLocationReady) throw new Error('No hay ubicacion del usuario')
	if(!this.mapService.isMapReady) throw new Error('No hay mapa disponible');

	this.mapService.flyTo(this.placesService.useLocation!);
  }
}
