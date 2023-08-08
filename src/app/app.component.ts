import { Component, OnInit } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

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

  constructor(
    private translate: TranslateService,
    private title: Title,
    private router: Router,
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

  ngOnInit() {
    window.scrollTo(0, 0);
    this.setupTitleListener();
  }

  
  private setupTitleListener() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let key: string;
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route?.snapshot?.data) {
            key = route?.snapshot?.data['key'];
          }

          return key;
        })
      )
      .subscribe((key: any) => {
        if (key) {
          // Get title page when router changes
          this.translate.get(`titleWebsite.${key}`).subscribe((title) =>
            this.title.setTitle(title)
          );
        }
      });
  }
}
