import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodService } from 'services/food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-BranchPage',
  templateUrl: './BranchPage.component.html',
  styleUrls: ['./BranchPage.component.scss']
})
export class BranchPageComponent implements OnInit {
  activeTab = 'pho-oc-chu-nam-1';
  slug: string;
  listBranch = []
  branch = null;

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    autoplayTimeout: 3000,
    items: 1,
    nav: false
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService,
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
    this.translate.get('tileWebsite.branch').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    window.scrollTo(0, 0);

    // Swal.fire({
    //   title: "Cảnh báo",
    //   text: "Trang này đang trong giai đoạn phát triển. Xin lỗi vì sự bất tiện này!",
    //   icon: "warning",
    // })

    this.slug = this.activatedRoute.snapshot.params.slug;

    if (this.slug) {
      this.activeTab = this.slug
    }
    else {
      this.slug = this.activeTab;
    }

    setTimeout(() => {
      this.foodService.getBranch().subscribe(data => {
        this.listBranch = data;
        let result = data.filter(({ slug }) => slug == this.slug);
        if (result.length == 0) {
          this.router.navigate(['/404'])
        }
        this.branch = result[0];
      });
    }, 1000);
  }

  onChangeTab(e) {
    this.activeTab = e.toString();
    this.branch = null;

    setTimeout(() => {
      let result = this.listBranch.filter(({ slug }) => slug == this.activeTab);
      if (result.length == 0) {
        this.router.navigate(['/404'])
      }
      this.branch = result[0];
    }, 1000);
  }
}
