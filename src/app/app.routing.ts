import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { WeatherComponent } from './components/weather/weather.component';

const appRoutes: Routes = [
    { path: '', component: WeatherComponent },
    { path: 'Weather', component: WeatherComponent },
    { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);