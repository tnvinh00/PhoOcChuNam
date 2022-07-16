import { Component, OnInit } from '@angular/core';
import { FoodService } from 'services/food.service';

@Component({
  selector: 'app-block-contact',
  templateUrl: './block-contact.component.html',
  styleUrls: ['./block-contact.component.scss']
})
export class BlockContactComponent implements OnInit {
  branch = [];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getBranch().subscribe(data => {
      setTimeout(() => {
        this.branch = data;
      }, 3000)
    });
  }
}
