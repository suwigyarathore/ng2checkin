import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

interface BookingDetails{
    bookingid : string,
    familyname : string
}

@Component({
  selector: 'booking-info',
  template: `
            <div class="alert alert-dismissible alert-success " [ngClass]="{ 'hidden': !bookingDetails.familyname || !bookingDetails.bookingid}">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong >Congratulations <span [innerHTML]="bookingDetails.familyname"></span>!</strong> You successfully retrieved your booking with Booking Id   <b class="successBookingCode">(<span [innerHTML]="bookingDetails.bookingid"></span>)</b>
            </div>
            `,
  styleUrls: ['./app/app.component.css'],
})

export class BookingInfoComponent {

    bookingDetails:BookingDetails;

    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit() {
    this.bookingDetails = {bookingid : '' , familyname: '' };
    this.route.params
      .map(params =>{    
         this.bookingDetails.bookingid = params['bookingid'] ;
         this.bookingDetails.familyname = params['familyname'] ;
         return this.bookingDetails;
         })
      .subscribe((id) => {
            console.log(this.bookingDetails)
      });
  }
  
} 

