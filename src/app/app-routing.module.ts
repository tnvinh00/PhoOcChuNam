import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NotFoundPageComponent } from 'pages/NotFoundPage/NotFoundPage.component';
import { HomePageComponent } from 'pages/HomePage/HomePage.component';
import { MenuPageComponent } from 'pages/MenuPage/MenuPage.component';
import { BranchPageComponent } from 'pages/BranchPage/BranchPage.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'chi-nhanh', component: BranchPageComponent },
  { path: 'chi-nhanh/:slug', component: BranchPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent }
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
