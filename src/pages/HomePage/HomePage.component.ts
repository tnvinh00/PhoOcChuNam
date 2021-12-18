import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Food } from 'models/food';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodService } from 'services/food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private titleService: Title,
    private translate: TranslateService
  ) { }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    center: false,
    autoWidth: true,
    autoplayTimeout: 4500,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      420: {
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

  food_odd = [];
  food_even = [];
  category = [];
  branch = [];

  ngOnInit() {
    this.translate.get('tileWebsite.home').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    window.scrollTo(0, 0);

    this.foodService.getFood().subscribe((data: Food[]) => {
      setTimeout(() => {
        data = data.filter(item => item.trend == "1");
        // data.sort((a, b) => {
        //   if (a.rate === b.rate) {
        //     return a.title < b.title ? -1 : 1
        //   } else {
        //     return a.rate < b.rate ? -1 : 1
        //   }
        // })
        this.food_odd = data.filter((item, index) => index % 2 == 0);
        this.food_even = data.filter((item, index) => index % 2 != 0);
        if (data.length % 2 != 0)
          this.food_even.push(data[data.length - 1]);
      }, 3000)
    });

    this.foodService.getCategory().subscribe((data: any) => {
      setTimeout(() => {
        this.category = data.filter(item => item.seafood == "1");
      }, 3000)
    });

    this.foodService.getBranch().subscribe(data => {
      setTimeout(() => {
        this.branch = data;
      }, 3000)
    });

    this.foodService.getNotification().subscribe(data => {
      setTimeout(() => {
        data = data.filter(item => item.status == "1");
        data.forEach(item => {
          Swal.fire({
            title: item.title,
            text: item.content,
            icon: "success",
          })
        })
      }, 3000)
    });
  }
}
