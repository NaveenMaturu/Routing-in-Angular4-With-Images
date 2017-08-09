import { Component, Output, OnInit} from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-vizag',
  templateUrl: './vizag.component.html',
  styleUrls: ['./vizag.component.css']
})
export class VizagComponent implements OnInit {
fullImagePath: string;
  constructor() { 
  this.fullImagePath = './assets/images/vizag.jpg'}
 
  ngOnInit() {
  }

}
