import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map, Observable } from 'rxjs';
import { BookingAdapter } from '../adapters/booking.adapter';
import type { BookingResponseDto } from '../models/booking-response.dto';
import type { Booking } from '../models/booking.model';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly httpClient = inject(HttpClient);
  private readonly bookingAdapter = inject(BookingAdapter);

  getBookingList(): Observable<Booking[]> {
    return this.httpClient
      .get<BookingResponseDto[]>(`${API_URL}/booking`)
      .pipe(map((resp) => resp.map(this.bookingAdapter.fromRespDtoToModel)));
  }
}
