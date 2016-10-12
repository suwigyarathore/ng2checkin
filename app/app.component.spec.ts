/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import {async , TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

////////  SPECS  /////////////

beforeEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  TestBed.configureTestingModule({
    declarations: [
      AppComponent
    ],
    imports: [
      FormGroup, FormControl, FormBuilder, Validators
      // HttpModule, etc.
    ],
    providers: [
      // { provide: ServiceA, useClass: TestServiceA }
    ]
  });
});

it('should do something', async(() => {
    // Overrides here, if you need them
    TestBed.compileComponents().then(() => {
    const fixture = TestBed.createComponent(AppComponent);

    // Access the dependency injected component instance
    const app = fixture.componentInstance;

    expect(app).toBeDefined();

    // Access the element
    const element = fixture.nativeElement;

    // Detect changes as necessary
    fixture.detectChanges();

    expect(element.textContent).toContain('something');
  });
}));

