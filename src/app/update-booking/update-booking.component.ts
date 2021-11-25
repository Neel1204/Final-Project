import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  id!: number;
  booking: Booking = new Booking();
  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe(data => {
      this.booking = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.bookingService.updateBooking(this.id, this.booking).subscribe( data =>{
      this.goToBookingList();
  }
  , error => console.log(error));
}
  
  goToBookingList(){
    this.router.navigate(['/bookings']);
  }
}
