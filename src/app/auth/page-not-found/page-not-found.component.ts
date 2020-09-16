import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  year = new Date().getFullYear();
}
