import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FacebookService } from 'services/facebook.service';

@Component({
  selector: 'app-fb-posts',
  templateUrl: './fb-posts.component.html',
  styleUrls: ['./fb-posts.component.scss'],
})
export class FbPostsComponent implements OnInit {
  posts = [];

  customOptions: OwlOptions = {
    dots: false,
    center: false,
    navText: [
      '<i class="fa fa-angle-left h4" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right h4" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1440: {
        items: 3,
      },
    },
    nav: true,
  };
  constructor(private facebookService: FacebookService) {}

  ngOnInit() {
    this.facebookService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
