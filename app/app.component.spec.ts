/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import {BookingService} from './booking.service'

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

import {  FormBuilder, Validators } from '@angular/forms';

////////  SPECS  /////////////

describe('App Comp', () => {
    let formBuilder:FormBuilder;
    let ap:AppComponent;
    let bookingService:BookingService

    beforeEach(() => {
       formBuilder = new FormBuilder();
       ap = new AppComponent(formBuilder,bookingService);
       bookingService = new BookingService();
       ap.ngOnInit();
    });

    it('should define AppComponent ', () => {
        expect(ap).toBeDefined();
    });

    it('should define the checkin form ', () => {
        expect(ap.checkinForm).toBeDefined();
    });

     it('form fields should be empty ', () => {
        ap.onCheckinDetailsSubmit();
        expect(ap.bookingCode).toEqual('');
        expect(ap.familyName).toEqual('');
    });

     it('form fields should be filled with default value ', () => {
        ap.onCheckinDetailsSubmit();
        ap.checkinForm = formBuilder.group({
            bookingcode: ['BKG123', Validators.required],
            familyname: ['Rathore', Validators.required],
         });
        ap.onCheckinDetailsSubmit();
        expect(ap.bookingCode).toEqual('BKG123');
        expect(ap.familyName).toEqual('Rathore');
    });

})

