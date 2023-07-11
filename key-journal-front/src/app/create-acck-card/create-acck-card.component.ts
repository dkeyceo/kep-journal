import { Component, OnInit } from '@angular/core';
import { AcckService } from '../services/acck.service';
import { Acck } from '../models/Acck';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-acck-card',
  templateUrl: './create-acck-card.component.html',
  styleUrls: ['./create-acck-card.component.css']
})
export class CreateAcckCardComponent implements OnInit {

  acck?: Acck;
  acckName: string = '';

  constructor(private acckService: AcckService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.acck = new Acck(this.acckName);
    this.acckService.createAcck(this.acck).subscribe(
      data => {
        console.log(data);
        this.backToList();
      },
      err => console.log(err)
    )
  }
  backToList(){
    this.router.navigate(['/list-accks'])
  }
}
