import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  activeLink: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.activeLink = this.router.url.split('/').slice(1,2)[0];
    console.log(this.activeLink);
  }
}
