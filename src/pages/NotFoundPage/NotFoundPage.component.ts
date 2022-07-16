import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-NotFoundPage',
  templateUrl: './NotFoundPage.component.html',
  styleUrls: ['./NotFoundPage.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.translateService.get('tileWebsite.notfound').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

    window.scrollTo(0, 0);
  }
  gotoHome(){
    this.router.navigate(['/'])
  }
}
