import { Component } from '@angular/core';
import {take} from 'rxjs/operators';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { LocationData } from '../models/location-data.model';

@Component({
  selector: 'app-location-recording',
  templateUrl: './location-recording.component.html',
  styleUrls: ['./location-recording.component.scss'],
})
export class LocationRecordingComponent {
  annotation: string = '';
  savedLocations: LocationData[] = [];
  
  constructor(private readonly geolocation$: GeolocationService) {}

  recordLocation() {
    this.geolocation$
      .pipe(take(1))
      .subscribe(position => 
        this.saveLocation(position.coords.latitude, position.coords.longitude));
  }
  
  saveLocation(latitude: number, longitude: number) {
    console.log(`Saving location: ${latitude}, ${longitude}`);

    if (!confirm(`Is this the correct annotation: ${this.annotation}?`)) {
      return;
    }

    if (latitude !== null && longitude !== null) {
      const locationData: LocationData = {
        latitude: latitude,
        longitude: longitude,
        annotation: this.annotation,
      };

      const savedLocationsJSON: string | null = localStorage.getItem('locations');
      const savedLocations: LocationData[] = (savedLocationsJSON) ? JSON.parse(savedLocationsJSON) : [];

      if (savedLocations.some(loc => loc.annotation === this.annotation)) {
        console.error('Error saving location, annotation already exists.');
        return;
      }

      savedLocations.push(locationData);
      this.savedLocations = savedLocations;
      localStorage.setItem('locations', JSON.stringify(savedLocations));
    } else {
      console.error('Error retrieving location, cannot save.');
    }
  }
  

  getSavedLocations(): LocationData[] {
    const savedLocationsJSON: string | null = localStorage.getItem('locations');
    return (savedLocationsJSON) ? JSON.parse(savedLocationsJSON) : [];

  }
  
  exportLocations() {
    const savedLocations = this.getSavedLocations();
    const data = JSON.stringify(savedLocations, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'locations.json';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  clearLocations() {
    if (confirm('Are you sure you want to clear all locations?')) {
      localStorage.removeItem('locations');
      this.savedLocations = [];
    }
  }

}
