import { Component, OnInit } from '@angular/core';
declare function customInitFunctions();
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styles: [
  ]
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
