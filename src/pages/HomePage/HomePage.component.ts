import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodService } from 'services/food.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private foodService: FoodService) { }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    center: false,
    autoWidth: true,
    autoplayTimeout: 4500,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 2
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  customOptions_food: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    center: false,
    autoWidth: true,
    autoplayTimeout: 50000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 2
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  food = [];
  category = [];
  branch = [];

  ngOnInit() {
    window.scrollTo(0, 0);

    this.foodService.getFood().subscribe(data => {
      this.food = data;
    });

    this.foodService.getCategory().subscribe(data => {
      this.category = data;
    });

    this.foodService.getBranch().subscribe(data => {
      this.branch = data;
    });
  }

  onClick() {
    console.log('click');
  }
}
