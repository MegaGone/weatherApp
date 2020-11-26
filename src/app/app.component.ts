import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  constructor(private _service: WeatherService) {

  }

  ngOnInit() {
  }
}
