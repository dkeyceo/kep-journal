import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserEDP } from '../models/UserEDP';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  usersEdp: UserEDP[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getUsersEDP().subscribe(data => {
      this.usersEdp = data;
    }, err => {
      console.log(err.error.message);
    });
  }

  onDelete(id: number){

  }
}
