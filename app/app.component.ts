import { Component } from '@angular/core';
import {BookingService} from './booking.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers : [BookingService],
})
export class AppComponent {

  checkinForm: FormGroup;
  bookingCode: string = "";
  familyName: string = "";

  constructor(private formBuilder: FormBuilder , private bookingService: BookingService) {}

  ngOnInit() {
    this.checkinForm = this.formBuilder.group({
      bookingcode: ['', Validators.required],
      familyname: ['', Validators.required],
    });


   //If needed to observe any value we can use this as observable
   /* this.checkinForm.valueChanges.subscribe((value) => {
           
    });*/

  }

  onCheckinDetailsSubmit(){ 
    
    if(this.bookingService.retreiveBooking(this.checkinForm.controls['bookingcode']['value'],this.checkinForm.controls['familyname']['value'])){
       this.bookingCode = this.checkinForm.controls['bookingcode']['value'];
       this.familyName = this.checkinForm.controls['familyname']['value'];
    }
    
  }
  
}