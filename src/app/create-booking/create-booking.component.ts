import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  bookings: Booking = new Booking ();
  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBooking(){
    this.bookingService.createBooking(this.bookings).subscribe( data =>{
      console.log(data);
      this.goToBookingList();
    },
    error => console.log(error));
  }

  goToBookingList(){
    this.router.navigate(['/bookings']);
  }

    onSubmit(){
      console.log(this.bookings);
      this.saveBooking();
    }
}
