import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LocationRecordingComponent } from './location-recording/location-recording.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
