import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccksComponent } from './list-accks/list-accks.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateAcckCardComponent } from './create-acck-card/create-acck-card.component';
import { AddUserCardComponent } from './add-user-card/add-user-card.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'list-accks', component: ListAccksComponent /*, canActivate:[FooGuard], data: {requiredRoles: ['admin','user']} */},
  {path:'list-users', component: ListUsersComponent /*, canActivate:[FooGuard], data: {requiredRoles: ['admin','user']} */},
  {path:'create-acck', component: CreateAcckCardComponent /*, canActivate:[FooGuard], data: {requiredRoles: ['admin']} */},
  {path:'add-user', component: AddUserCardComponent /*, canActivate:[FooGuard], data: {requiredRoles: ['admin']}  */ },
//   {path:'signup', component: SignupComponent, canActivate: [SignupGuard] },
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }