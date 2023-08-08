import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  activeLink: string;
  isshow: boolean = false;
  icon = 'menu';

  @HostListener("document:click")
  clickedOut() {
    this.onClick(event);
  }

  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private _eref: ElementRef
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.activeLink = e.url.split('/').slice(1, 2)[0];
      });
  }

  gotoContacts() {
    this.scroller.scrollToAnchor('lien-he');
    this.isshow = false;
    this.icon = 'menu';
  }

  onClickOpenMenu() {
    this.isshow = !this.isshow;
    this.icon = this.icon === 'menu' ? 'close' : 'menu';
  }

  onClickMenu(e) {
    this.activeLink = e.toString();
    this.isshow = false;
    this.icon = 'menu';
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.isshow = false;
      this.icon = 'menu';
    }
  }
}
