import { Component, OnInit } from '@angular/core';
import { AcckService } from '../services/acck.service';
import { Acck } from '../models/Acck';
import { UserEDP } from '../models/UserEDP';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-card',
  templateUrl: './add-user-card.component.html',
  styleUrls: ['./add-user-card.component.css']
})
export class AddUserCardComponent implements OnInit {

  acckSelected: any = null;
  accks: Acck[] = [];
  userPIB: string = '';
  userResponsiblePIB: string = '';
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  identityZNOK: string = '';

  userEDP?: UserEDP;

  constructor(private acckService: AcckService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAccks();
  }

  onSelect(){
    console.log(this.acckSelected + ' = ' + this.acckSelected)
  }
  onCreate(){
    const acckId: number = this.acckSelected['id'];
    // const userEDP = new UserEDP(acckId, this.userPIB, this.userResponsiblePIB, this.dateFrom, this.dateTo, this.identityZNOK);
    
    this.usersService.createUserEDP(
      {
        acckId: acckId,
        userPIB: this.userPIB,
        userResponsiblePIB: this.userResponsiblePIB,
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        identityZNOK: this.identityZNOK
      }
    ).subscribe(data =>{
      this.router.navigate(['/list-users']);
      
    }, err => {
      console.log(err.error.message);
    })
  }

  getAccks(){
    this.acckService.getAccks().subscribe(data => {
      this.accks = data;
      console.log(data);
    }, err => {
      console.log(err.error.message);
    })
  }

}
