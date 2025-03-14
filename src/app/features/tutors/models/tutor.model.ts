import { TutorsReponseDto } from './tutors-response.dto';

export interface Tutor
  extends Pick<
    TutorsReponseDto,
    'id' | 'email' | 'phone' | 'speciality' | 'status'
  > {
  firstName: string;
  lastName: string;
  birthDate: Date;
  roleId: number;
}
