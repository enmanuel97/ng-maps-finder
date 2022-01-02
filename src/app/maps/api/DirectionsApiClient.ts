import { DirectionResponse } from './../interfaces/directions';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class DirectionsApiClient extends HttpClient {
	public baseUrl: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

	constructor(handler: HttpHandler) {
		super(handler)
	}

	public override get<T>(url: string) {
		url = this.baseUrl + url;
		return super.get<T>(url, {
			params: {
				alternatives: false,
				geometries: 'geojson',
				overview: 'simplified',
				steps: false,
				language: 'es',
				access_token: environment.apiKey
			}
		});
	}
}