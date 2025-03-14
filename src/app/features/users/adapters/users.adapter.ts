import { Injectable } from '@angular/core';
import type { User } from '../models/user.model';
import type { UsersResponseDto } from '../models/users-response.dto';
import type { IGenericAdapter } from 'src/app/core/Interfaces/IGenericAdapter';

@Injectable({ providedIn: 'root' })
export class UsersAdapter implements IGenericAdapter<UsersResponseDto, User> {
  fromRespDtoToModel(respDto: UsersResponseDto): User {
    const user: User = {
      id: respDto.id,
      firstName: respDto.first_name,
      lastName: respDto.last_name,
      email: respDto.email,
      phone: respDto.phone,
    };

    return user;
  }
}
