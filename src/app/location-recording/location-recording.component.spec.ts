import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRecordingComponent } from './location-recording.component';

describe('LocationRecordingComponent', () => {
  let component: LocationRecordingComponent;
  let fixture: ComponentFixture<LocationRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationRecordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
