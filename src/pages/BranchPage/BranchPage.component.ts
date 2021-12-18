import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  branch;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService,
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.translate.get('tileWebsite.branch').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    window.scrollTo(0, 0);

    Swal.fire({
      title: "Cảnh báo",
      text: "Trang này đang trong giai đoạn phát triển. Xin lỗi vì sự bất tiện này!",
      icon: "warning",
    })

    this.slug = this.activatedRoute.snapshot.params.slug;

    if (this.slug) {
      this.activeTab = this.slug
    }

    this.foodService.getBranch().subscribe(data => {
      let result = data.filter(({ slug }) => slug == this.slug);
      this.branch = result[0].slug;
    });
  }
}
