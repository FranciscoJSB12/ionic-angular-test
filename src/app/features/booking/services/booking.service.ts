import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map, Observable } from 'rxjs';
import { BookingAdapter } from '../adapters/booking.adapter';
import type { BookingResponseDto } from '../models/booking-response.dto';
import type { Booking } from '../models/booking.model';
import type { BookingUser } from '../models/booking-user.model';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class BookingService {
  public isLoading: boolean = false;
  public error: string = '';
  private _users: BookingUser[] = [];
  private _currentBookings: Booking[] = [];
  private _originalBookings: Booking[] = [];
  private readonly httpClient = inject(HttpClient);
  private readonly bookingAdapter = inject(BookingAdapter);

  get bookings(): Booking[] {
    return this._currentBookings;
  }

  get users(): BookingUser[] {
    return this._users;
  }

  getBookingList(): void {
    this.isLoading = true;
    this.httpClient
      .get<BookingResponseDto[]>(`${API_URL}/booking`)
      .pipe(map((resp) => resp.map(this.bookingAdapter.fromRespDtoToModel)))
      .subscribe({
        next: (bookings) => {
          this._currentBookings = [...bookings];
          this._originalBookings = [...bookings];

          this.determineAvailableUsers(bookings);
        },
        complete: () => {
          this.isLoading = false;
        },
        error: (resp) => {
          console.error(resp);
          this.isLoading = false;
          this.error = 'Hubo un error, intenta luego';
        },
      });
  }

  filterBookingListByUser(id: number): void {
    if (id === 0) {
      this._currentBookings = [...this._originalBookings];
    } else {
      this._currentBookings = this._originalBookings.filter(
        (booking) => booking.userId === id
      );
    }
  }

  private determineAvailableUsers(bookings: Booking[]): void {
    const users: BookingUser[] = bookings.map((booking) => ({
      id: booking.userId,
      fullName: booking.user.firstName + ' ' + booking.user.lastName,
    }));

    const uniqueUsers = Array.from(new Set(users.map((user) => user.id))).map(
      (id) => {
        return users.find((user) => user.id === id)!;
      }
    );

    this._users = [...uniqueUsers];
  }
}
