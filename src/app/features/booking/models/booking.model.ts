import type { BookingResponseDto, StaffRespDto } from './booking-response.dto';

export interface Booking extends Pick<BookingResponseDto, 'id' | 'date'> {
  serviceId: number;
  staffId: number;
  userId: number;
  startTime: string;
  endTime: string;
  user: Omit<Staff, 'speciality'>;
  staff: Staff;
}

export interface Staff
  extends Pick<StaffRespDto, 'id' | 'email' | 'phone' | 'speciality'> {
  firstName: string;
  lastName: string;
}
