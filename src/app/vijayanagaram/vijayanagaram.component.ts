import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-vijayanagaram',
  templateUrl: './vijayanagaram.component.html',
  styleUrls: ['./vijayanagaram.component.css']
})
export class VijayanagaramComponent implements OnInit {
fullImagePath: string;
  constructor() {
this.fullImagePath = './assets/images/vzm.jpg'	  }

  ngOnInit() {
  }

}
