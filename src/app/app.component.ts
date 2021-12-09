import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 100,
  hideDelay: 100,
  touchendHideDelay: 100,
  position: 'above'
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
    private titleService: Title
  ) {
    translate.addLangs(['vn', 'en']);
    translate.setDefaultLang('vn');

    if (JSON.parse(localStorage.getItem('config'))?.language) {
      translate.use(JSON.parse(localStorage.getItem('config')).language);
    }
    else {
      const browserLang = this.translate.getBrowserLang();
      // this.translate.use(browserLang.match(/vn|en/) ? browserLang : 'vn');
      this.translate.use('vn');

      const config = JSON.parse(localStorage.getItem('config')) || {};
      config.language = translate.currentLang;
      localStorage.setItem('config', JSON.stringify(config));
    }

    this.translate.get('tileWebsite').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }
}
