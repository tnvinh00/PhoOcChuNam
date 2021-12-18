import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-block-feature',
  templateUrl: './block-feature.component.html',
  styleUrls: ['./block-feature.component.scss']
})
export class BlockFeatureComponent implements OnInit {
  features = [];

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.translate.get('features').subscribe((res) => {
        res = Object.values(res);
        this.features = res;
      });
    }, 3000);
  }

}
