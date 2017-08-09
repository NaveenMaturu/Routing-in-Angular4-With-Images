import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subroute',
  templateUrl: './subroute.component.html',
  styleUrls: ['./subroute.component.css']
})
export class SubrouteComponent implements OnInit {

  fullImagePath: string;

 
  constructor() {this.fullImagePath = './assets/images/sub.jpg' }

  ngOnInit() {
  }

}

