import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '58881afaa0b1c91c2b4668f369a45b77';
  URI: string = '';

  constructor(private _http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(name: string, code: string) {
    return this._http.get(`${this.URI}${name},${code}`);
  }
}