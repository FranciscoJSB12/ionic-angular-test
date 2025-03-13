import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import type { BookingResponseDto } from '../models/booking-response.dto';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly httpClient = inject(HttpClient);

  getBookingList(): Observable<BookingResponseDto[]> {
    return this.httpClient.get<BookingResponseDto[]>(`${API_URL}/booking`);
  }
}
