import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  output: any = [];
  constructor() { }

  ngOnInit() {
  }


  addBooking(form: NgForm) {
    var booking = form.value;
    this.output.push(booking);
    console.log(this.output);
    form.resetForm();
  }

  delete(index) {
    alert("Do you want delete this Ticket")
    this.output.splice(index, 1);
  }

}
