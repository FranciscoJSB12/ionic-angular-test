import type { UsersResponseDto } from './users-response.dto';

export interface User extends Pick<UsersResponseDto, 'id' | 'email' | 'phone'> {
  firstName: string;
  lastName: string;
}
