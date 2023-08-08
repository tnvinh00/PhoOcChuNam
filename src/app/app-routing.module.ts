import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NotFoundPageComponent } from 'pages/NotFoundPage/NotFoundPage.component';
import { HomePageComponent } from 'pages/HomePage/HomePage.component';
import { MenuPageComponent } from 'pages/MenuPage/MenuPage.component';
import { BranchPageComponent } from 'pages/BranchPage/BranchPage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      key: "home"
    }
  },
  {
    path: 'menu',
    component: MenuPageComponent,
    data: {
      key: "menu"
    }
  },
  {
    path: 'chi-nhanh',
    component: BranchPageComponent,
    data: {
      key: "branch"
    }
  },
  {
    path: 'chi-nhanh/:slug',
    component: BranchPageComponent,
    data: {
      key: "branch"
    }
  },
  {
    path: '404',
    component: NotFoundPageComponent,
    data: {
      key: "notfound"
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: {
      key: "notfound"
    }
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
