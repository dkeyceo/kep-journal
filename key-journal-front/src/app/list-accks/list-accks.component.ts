import { Component, OnInit } from '@angular/core';
import { AcckService } from '../services/acck.service';
import { Acck } from '../models/Acck';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-accks',
  templateUrl: './list-accks.component.html',
  styleUrls: ['./list-accks.component.css']
})
export class ListAccksComponent implements OnInit {

  accks: Acck[] = [];

  constructor(private acckService: AcckService,
    private toastr: ToastrService) { }

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

  onDelete(id: number){
    this.acckService.deleteAccksById(id)
    .subscribe(data => {
      this.toastr.success('КНЕДП видалено', 'OK', {
        timeOut: 3000, positionClass:'toast-top-right'
      });
      this.getAccks();
    }, err => {
      this.toastr.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass:'toast-top-right'
      });
    });
  }
}
