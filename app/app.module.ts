import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { BookingInfoComponent } from './bookinginfo.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [ 
    AppComponent,
    MasterComponent,
    BookingInfoComponent
  ],
  bootstrap: [ MasterComponent ]
})
export class AppModule {}