import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { WeatherService } from '../../Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather;
  public title: string;
  public status: string;

  form = new FormGroup({
    cityName: new FormControl('', Validators.required),
    countryCode: new FormControl('', Validators.required)
  })

  constructor(private _weatherService: WeatherService) {
    this.title = 'Weather';
  }

  ngOnInit(): void {
  }

  getLocation(name: string, code: string) {
    this._weatherService.getWeather(name, code)
      .subscribe(
        res => {
          console.log(res),
            this.weather = res
        },
        err => console.log(<any>err)
      )
  }

  onSubmit(name: HTMLInputElement, code: HTMLInputElement, form) {
    if (name.value && code.value) {
      this.getLocation(name.value, code.value);
      name.value = '';
      code.value = '';
      this.status = 'success';
    } else {
      //alert('Please insert some values');
      this.status = 'failed';
    }

  };
}