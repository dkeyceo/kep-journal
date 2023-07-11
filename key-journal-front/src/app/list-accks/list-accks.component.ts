import { Component, OnInit } from '@angular/core';
import { AcckService } from '../services/acck.service';
import { Acck } from '../models/Acck';

@Component({
  selector: 'app-list-accks',
  templateUrl: './list-accks.component.html',
  styleUrls: ['./list-accks.component.css']
})
export class ListAccksComponent implements OnInit {

  accks: Acck[] = [];

  constructor(private acckService: AcckService) { }

  ngOnInit(): void {
    this.getAccks();
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
