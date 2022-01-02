import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlbGFjcnV6OTcxMyIsImEiOiJja2tkNW9vM24wMzNhMnVsM3VueGt6dDduIn0.bF8n2U2ReHKYO45lUjM7aA';

if(!navigator.geolocation) {
	alert('Geolocation is not supported by your browser');
	throw new Error('Geolocation is not supported by your browser');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
