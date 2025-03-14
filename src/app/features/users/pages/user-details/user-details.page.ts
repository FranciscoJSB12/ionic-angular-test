import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import type { User } from '../../models/user.model';

@Component({
  standalone: false,
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  userId!: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService
  ) {}

  ngOnInit() {
    this.getUserIdFromUrlAndDetails();
  }

  getUserIdFromUrlAndDetails(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.get('userId')) {
        return;
      }

      this.userId = +(paramMap.get('userId') as string);
    });
  }

  get user(): User {
    return this.usersService.getUserById(this.userId);
  }
}
