import { Component } from '@angular/core';
import {BookingService} from './booking.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers : [BookingService],
})
export class AppComponent {

  checkinForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder , private bookingService: BookingService,private router:Router ) {}

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
      this.router.navigate(['/bookinginfo', this.checkinForm.controls['bookingcode']['value'],this.checkinForm.controls['familyname']['value']]);  
    }
    
  }
  
} 