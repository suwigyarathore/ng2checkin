export class BookingService{
    retreiveBooking(bookingId:string,familyName:string): boolean{
        console.log(`Booking Id ${bookingId} and familyName ${familyName} submitted` );
        //Do HTTP calls here
        return true;
    }
}