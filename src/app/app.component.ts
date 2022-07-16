import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 100,
  hideDelay: 100,
  touchendHideDelay: 100,
  position: 'above',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
})
export class AppComponent {
  title = 'phooc';

  constructor(
    private translate: TranslateService,
  ) {
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('vi');

    if (JSON.parse(localStorage.getItem('config'))?.language) {
      translate.use(JSON.parse(localStorage.getItem('config')).language);
    }
    else {
      const browserLang = this.translate.getBrowserLang();
      // this.translate.use(browserLang.match(/vi|en/) ? browserLang : 'vi');
      this.translate.use('vi');

      // const config = JSON.parse(localStorage.getItem('config')) || {};
      // config.language = this.translate.currentLang;
      // localStorage.setItem('config', JSON.stringify(config));
    }
  }

  OnInit() {
    window.scrollTo(0, 0);
  }
}
