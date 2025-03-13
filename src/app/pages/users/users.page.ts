import { Component, DestroyRef, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-tutors',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  isLoading: boolean = true;
  users: User[] = [];

  constructor(
    private readonly usersService: UsersService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.isLoading = true;

    const subscription = this.usersService.getUsersList().subscribe({
      next: (users) => {
        this.users = users;
      },
      complete: () => {
        this.isLoading = false;
      },
      error: (resp) => {
        console.error(resp);
        this.isLoading = false;
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
