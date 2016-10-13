import { AppComponent } from './app.component';
import { BookingInfoComponent } from './bookinginfo.component';

export const AppRoutes = [
  { path: '', component: AppComponent },
  { path: 'bookinginfo/:bookingid/:familyname', component: BookingInfoComponent }
];