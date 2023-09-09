import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LocationRecordingComponent } from './location-recording/location-recording.component';
import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';

@NgModule({
  declarations: [
    AppComponent,
    LocationRecordingComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
  ],
  providers: [{
    provide: POSITION_OPTIONS,
    useValue: {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
