import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from 'pages/NotFoundPage/NotFoundPage.component';
import { HomePageComponent } from 'pages/HomePage/HomePage.component';
import { MenuPageComponent } from 'pages/MenuPage/MenuPage.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
