export interface BookingResponseDto {
  id: number;
  service_id: number;
  staff_id: number;
  user_id: number;
  date: Date;
  start_time: string;
  end_time: string;
  user: StaffRespDto;
  staff: StaffRespDto;
}

export interface StaffRespDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  speciality?: string;
}
