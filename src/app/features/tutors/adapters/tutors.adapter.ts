import { Injectable } from '@angular/core';
import type { IGenericAdapter } from 'src/app/core/Interfaces/IGenericAdapter';
import type { TutorsReponseDto } from '../models/tutors-response.dto';
import type { Tutor } from '../models/tutor.model';

@Injectable({ providedIn: 'root' })
export class TutorsAdapter implements IGenericAdapter<TutorsReponseDto, Tutor> {
  fromRespDtoToModel(respDto: TutorsReponseDto): Tutor {
    const tutor: Tutor = {
      firstName: respDto.first_name,
      lastName: respDto.last_name,
      birthDate: respDto.birth_date,
      roleId: respDto.role_id,
      id: respDto.id,
      email: respDto.email,
      phone: respDto.phone,
      speciality: respDto.speciality,
      status: respDto.status,
    };

    return tutor;
  }
}
