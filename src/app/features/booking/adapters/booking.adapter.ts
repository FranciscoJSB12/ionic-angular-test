import { Injectable } from '@angular/core';
import type { Booking } from '../models/booking.model';
import type { BookingResponseDto } from '../models/booking-response.dto';
import type { IGenericAdapter } from 'src/app/core/Interfaces/IGenericAdapter';

@Injectable({ providedIn: 'root' })
export class BookingAdapter
  implements IGenericAdapter<BookingResponseDto, Booking>
{
  fromRespDtoToModel(respDto: BookingResponseDto): Booking {
    const booking: Booking = {
      id: respDto.id,
      serviceId: respDto.service_id,
      staffId: respDto.staff_id,
      userId: respDto.user_id,
      startTime: respDto.start_time,
      endTime: respDto.end_time,
      date: respDto.date,
      user: {
        id: respDto.user.id,
        firstName: respDto.user.first_name,
        lastName: respDto.user.last_name,
        email: respDto.user.email,
        phone: respDto.user.phone,
      },
      staff: {
        id: respDto.staff.id,
        firstName: respDto.staff.first_name,
        lastName: respDto.staff.last_name,
        email: respDto.staff.email,
        phone: respDto.staff.phone,
        speciality: respDto.staff.speciality,
      },
    };

    return booking;
  }
}
