import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodService } from 'services/food.service';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 3000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    center: true,
    items: 1,
    nav: false,
  }
  carousel = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getCarousel().subscribe(data => {
      this.carousel = data;
    });
  }
  onClickBook() {
    console.log("Book");
  }

  onClickContact() {
    console.log("Contact");
  }
}
