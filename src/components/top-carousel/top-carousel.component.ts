import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    center: true,
    items: 1,
    nav: false,
  }
  carousel = [];

  constructor(
    private foodService: FoodService,
    private router: Router,
    private scroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.foodService.getCarousel().subscribe(data => {
      setTimeout(() => {
        this.carousel = data;
      }, 2000);
    });
  }
  onOpenMenu() {
    this.router.navigate(['/menu'])
  }

  onOpenBranch() {
    this.router.navigate(['/chi-nhanh'])
    // this.scroller.scrollToAnchor('lien-he');
  }
}
