import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersAdapter } from '../adapters/users.adapter';
import type { UsersResponseDto } from '../models/users-response.dto';
import type { User } from '../models/user.model';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly httpClient = inject(HttpClient);
  private readonly usersAdapter = inject(UsersAdapter);

  getUsersList(): Observable<User[]> {
    return this.httpClient
      .get<UsersResponseDto[]>(`${API_URL}/users`)
      .pipe(map((resp) => resp.map(this.usersAdapter.fromRespDtoToModel)));
  }
}
