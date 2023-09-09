# LocationLogger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Info

- If you use the app the data is stored in your browser in local storage and goes nowhere else.

- Most of the code is in /src/app/location-recording
1.  location-recording.component.html holds the html for class that is defined in...
2.  location-recording.component.ts holds all the logic for the app. It defines a class LocationRecordingComponent that has a few methods: recordLocation(), saveLocation(), getSavedLocations(), exportLocations(), clearLocations(). The recordLocation uses the GeolocationService "observable" from [ng-web-apis/geolocation](https://ng-web-apis.github.io/geolocation/)


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run npm run build:gh
