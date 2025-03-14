import { Component, DestroyRef, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import type { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: false,
})
export class BookingPage implements OnInit {
  constructor(private readonly bookingService: BookingService) {}

  ngOnInit() {
    this.getBookingList();
  }

  get users() {
    return this.bookingService.users;
  }

  get bookings(): Booking[] {
    return this.bookingService.bookings;
  }

  get isLoading(): boolean {
    return this.bookingService.isLoading;
  }

  get error(): string {
    return this.bookingService.error;
  }

  onUserChange(data: CustomEvent) {
    const value: number = data.detail.value;
    this.bookingService.filterBookingListByUser(value);
  }

  getBookingList(): void {
    this.bookingService.getBookingList();
  }
}
