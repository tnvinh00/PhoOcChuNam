import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'services/facebook.service';

@Component({
  selector: 'app-fb-posts',
  templateUrl: './fb-posts.component.html',
  styleUrls: ['./fb-posts.component.scss'],
})
export class FbPostsComponent implements OnInit {
  posts = [];
  constructor(private facebookService: FacebookService) {}

  ngOnInit() {
    this.facebookService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
