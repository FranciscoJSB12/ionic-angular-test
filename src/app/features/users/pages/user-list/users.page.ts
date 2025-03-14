import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutors',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  get users(): User[] {
    return this.usersService.users;
  }

  get isLoading(): boolean {
    return this.usersService.isLoading;
  }

  get error(): string {
    return this.usersService.error;
  }

  onSelectUserDetails(id: number) {
    this.router.navigate(['users', id]);
  }

  getUsersList(): void {
    this.usersService.getUsersList();
  }
}
