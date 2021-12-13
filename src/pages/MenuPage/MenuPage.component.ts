import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MenuPage',
  templateUrl: './MenuPage.component.html',
  styleUrls: ['./MenuPage.component.scss']
})
export class MenuPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
