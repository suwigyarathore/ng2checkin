/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import {BookingService} from './booking.service'

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

import {  FormBuilder, Validators } from '@angular/forms';

////////  SPECS  /////////////

describe('Testing AppComponent Checkin Form', () => {
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

     it('should have empty fields on blank submission ', () => {
        ap.onCheckinDetailsSubmit();
        expect(ap.bookingCode).toEqual('');
        expect(ap.familyName).toEqual('');
    });

     it('should populate with default fields ', () => {
       
        ap.checkinForm = formBuilder.group({
            bookingcode: ['BKG123', Validators.required],
            familyname: ['Rathore', Validators.required],
         });
        ap.onCheckinDetailsSubmit();
        expect(ap.bookingCode).toEqual('BKG123');
        expect(ap.familyName).toEqual('Rathore');
    });


    it('should be in invalid state with blank booking ID' , () => {
      
        ap.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['Rathore', Validators.required],
         });
        expect(ap.checkinForm.invalid).toBeTruthy();

    });

     it('should be in invalid state with blank  family name' , () => {
      
        ap.checkinForm = formBuilder.group({
            bookingcode: ['BKG123', Validators.required],
            familyname: ['', Validators.required],
         });
        expect(ap.checkinForm.invalid).toBeTruthy();

    });

     it('should be in invalid state with both blank fields' , () => {
      
        ap.checkinForm = formBuilder.group({
            bookingcode: ['', Validators.required],
            familyname: ['', Validators.required],
         });
        expect(ap.checkinForm.invalid).toBeTruthy();

    });

     it('should be in valid state with both fields filled' , () => {
      
        ap.checkinForm = formBuilder.group({
            bookingcode: ['BKG123', Validators.required],
            familyname: ['Rathore', Validators.required],
         });
        expect(ap.checkinForm.valid).toBeTruthy();

    });



})

