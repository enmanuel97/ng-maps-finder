import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounseTimer?: NodeJS.Timeout;

  constructor(private placesService: PlacesService) { }

  onQueryChanged(query: string = '') {
	  if(this.debounseTimer) clearTimeout(this.debounseTimer);

    this.debounseTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 500);
  }
}
