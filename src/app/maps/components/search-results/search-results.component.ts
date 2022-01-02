import { Feature } from './../../interfaces/places';
import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  	selector: 'app-search-results',
  	templateUrl: './search-results.component.html',
  	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

	public selectedId: string = '';

  	constructor(private placesService: PlacesService, private mapService: MapService) { }

	get isLoadingPlaces():  Boolean {
		return this.placesService.isLoadingPlaces;
	}

	get places(): Feature[] {
		return this.placesService.places;
	}

	flyTo(place: Feature) {
		this.selectedId = place.id;
		const [lng, lat] = place.center;
		this.mapService.flyTo([lng, lat]);
	}

	getDirections(place: Feature) {
		if(!this.placesService.useLocation) throw new Error('no hay location');
		this.placesService.deletePlaces();
		const start = this.placesService.useLocation as [number, number];
		const end = place.center as [number, number];

		this.mapService.getRouteBetweenPoints(start, end)
	}
}
