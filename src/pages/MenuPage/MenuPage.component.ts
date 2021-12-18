import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { FoodService } from 'services/food.service';
import StringUtils from 'utils/string';

@Component({
  selector: 'app-MenuPage',
  templateUrl: './MenuPage.component.html',
  styleUrls: ['./MenuPage.component.scss']
})
export class MenuPageComponent implements OnInit {
  listFoods = [];
  foods = [];
  categories = [];
  searchString = '';
  isloading = true;

  paramTranslate = {
    result: 0,
    searchString: ""
  };

  currentCategory = 'all';
  currentSearchString = "";

  constructor(
    private foodService: FoodService,
    private titleService: Title,
    private translate: TranslateService,
    private scroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.translate.get('tileWebsite.menu').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    window.scrollTo(0, 0);

    this.foodService.getFood().subscribe(data => {
      setTimeout(() => {
        this.foods = data;
        this.listFoods = data;
        this.paramTranslate = {
          result: this.foods.length || 0,
          searchString: this.currentSearchString
        }
        this.isloading = false;
      }, 2000);
    });

    this.foodService.getCategory().subscribe(data => {
      setTimeout(() => {
        this.categories = data;
      }, 1000)
    });
  }

  searchFood(e) {
    this.scroller.scrollToAnchor('top-section-text');
    this.foods = [];
    this.currentSearchString = e.toString()
    if (e === '') {
      this.foods = this.listFoods;
    }
    else {
      this.foods = this.listFoods.filter(({ title }) => StringUtils.removeUnicode(title).toLowerCase().includes(StringUtils.removeUnicode(e.toString()).toLowerCase()));
    }
    this.paramTranslate = {
      result: this.foods.length || 0,
      searchString: this.currentSearchString
    }
  }

  onSelectCategory(e) {
    if (window.innerWidth > 768)
      this.scroller.scrollToAnchor('section-search');
    else
      this.scroller.scrollToAnchor('main-menu');
    this.isloading = false;
    if (e.toString() == this.currentCategory)
      return;
    this.currentCategory = e.toString();
    this.foods = this.listFoods;
    if (e == 'all') {
      this.foods = this.listFoods;
    }
    else {

      this.foods = this.listFoods.filter(({ categoryId }) => categoryId === e.toString());
      this.foods.sort(function (a, b) {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }
    this.paramTranslate = {
      result: this.foods.length || 0,
      searchString: this.currentSearchString
    }
  }
}
