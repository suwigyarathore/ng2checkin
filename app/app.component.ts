import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {

  checkinForm: FormGroup;
  bookingCode: string = "";
  familyName: string = "";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkinForm = this.formBuilder.group({
      bookingcode: ['', Validators.required],
      familyname: ['', Validators.required],
    });
  }

  onCheckinDetailsSubmit(){
    console.log('KLM Checkin: Checkin Form Submitted'); 
    this.bookingCode = this.checkinForm.controls['bookingcode']['value'];
    this.familyName = this.checkinForm.controls['familyname']['value'];
    console.log(this.bookingCode);
    
  }
  
}