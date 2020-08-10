import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputComponent } from './user-input.component';
import { LocationService } from '@services/location.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '@shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserInputComponent', () => {
  const locationServiceSpy = jasmine.createSpyObj<LocationService>('LocationService', ['findLocationfromDevice']);
  const snackbarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['open']);
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [UserInputComponent],
      providers: [
        { provide: LocationService, useValue: locationServiceSpy },
        { provide: MatSnackBar, useValue: locationServiceSpy },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
