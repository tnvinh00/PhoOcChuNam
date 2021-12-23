import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentLanguage;
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.currentLanguage = this.translate.currentLang;
    const config = JSON.parse(localStorage.getItem('config')) || {};
    config.language = this.translate.currentLang;
    localStorage.setItem('config', JSON.stringify(config));
  }

  onChangeLanguage(e) {
    window.scrollTo(0, 0);
    this.currentLanguage = e.toString();
    this.translate.use(e.toString());

    const config = JSON.parse(localStorage.getItem('config')) || {};
    config.language = e.toString();
    localStorage.setItem('config', JSON.stringify(config));
  }
}
