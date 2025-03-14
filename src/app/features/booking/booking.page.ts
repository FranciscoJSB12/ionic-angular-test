import { Component, DestroyRef, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: false,
})
export class BookingPage implements OnInit {
  constructor(
    private readonly bookingService: BookingService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.bookingService.getBookingList().subscribe({
      next: (bookings) => {
        console.log(bookings);
      },
    });
  }
}
