import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-bogapuram',
  templateUrl: './bogapuram.component.html',
  styleUrls: ['./bogapuram.component.css']
})
export class BogapuramComponent implements OnInit {
fullImagePath: string;
  constructor() {
this.fullImagePath = './assets/images/bog.jpg'	  }

  ngOnInit() {
  }

}
