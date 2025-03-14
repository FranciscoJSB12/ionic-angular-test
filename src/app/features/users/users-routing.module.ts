import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPage } from './pages/user-list/users.page';
import { UserDetailsPage } from './pages/user-details/user-details.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: ':userId',
    component: UserDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
