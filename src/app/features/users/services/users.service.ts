import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersAdapter } from '../adapters/users.adapter';
import type { UsersResponseDto } from '../models/users-response.dto';
import type { User } from '../models/user.model';

const API_URL = environment.API_URL;
const lastSelectedUserStored = 'lastSelectedUser';

@Injectable({ providedIn: 'root' })
export class UsersService {
  public lastSelectedUser!: User;
  public isLoading: boolean = false;
  public error: string = '';
  private _users: User[] = [];

  constructor() {
    //Recupera ultimo usuario seleccionado en caso de recarga en pantalla de detalles
    const cachedUser = localStorage.getItem(lastSelectedUserStored);

    if (cachedUser) {
      this.lastSelectedUser = JSON.parse(cachedUser);
    }
  }

  private readonly httpClient = inject(HttpClient);
  private readonly usersAdapter = inject(UsersAdapter);

  get users(): User[] {
    return this._users;
  }

  getUsersList(): void {
    this.httpClient
      .get<UsersResponseDto[]>(`${API_URL}/users`)
      .pipe(map((resp) => resp.map(this.usersAdapter.fromRespDtoToModel)))
      .subscribe({
        next: (users) => {
          this._users = users;
        },
        complete: () => {
          this.isLoading = false;
        },
        error: (resp) => {
          console.error(resp);
          this.isLoading = false;
          this.error = 'Hubo un error, intenta luego...';
        },
      });
  }

  getUserById(id: number): User {
    if (this._users.length > 0) {
      const user = this._users.find((user) => user.id === id)!;
      this.persistLastSelectedUser(user);
      return user;
    } else {
      return this.lastSelectedUser;
    }
  }

  private persistLastSelectedUser(user: User): void {
    localStorage.setItem(lastSelectedUserStored, JSON.stringify(user));
  }
}
