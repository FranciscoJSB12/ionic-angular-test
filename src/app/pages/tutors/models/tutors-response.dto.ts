export interface TutorsReponseDto {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  email: string;
  phone: string;
  role_id: number;
  status: Status;
  speciality: string;
}

export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}
