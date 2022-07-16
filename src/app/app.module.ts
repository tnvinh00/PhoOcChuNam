import { NotFoundPageComponent } from 'pages/NotFoundPage/NotFoundPage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import packages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';


// Import Components
import { MaterialModule } from './material.module';
import { LazyloadModule } from './lazyload/lazyload.module';
import { TopBarComponent } from 'components/top-bar/top-bar.component';
import { FooterComponent } from 'components/footer/footer.component';
import { RoundButtonComponent } from 'components/button/round-button/round-button.component';
import { HomePageComponent } from 'pages/HomePage/HomePage.component';
import { MenuPageComponent } from 'pages/MenuPage/MenuPage.component';
import { CarouselComponent } from 'components/carousel/carousel.component';
import { TopCarouselComponent } from 'components/top-carousel/top-carousel.component';
import { BranchCardComponent } from 'components/branch-card/branch-card.component';
import { BranchPageComponent } from 'pages/BranchPage/BranchPage.component';
import { ButtonToggleComponent } from 'components/button/button-toggle/button-toggle.component';
import { BlockFeatureComponent } from 'components/blocks/block-feature/block-feature.component';
import { BlockContactComponent } from 'components/blocks/block-contact/block-contact.component';
import { ScrollTopButtonComponent } from 'components/button/scroll-top-button/scroll-top-button.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SafePipe } from 'pipes/safe.pipe';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HomePageComponent,
    MenuPageComponent,
    BranchPageComponent,
    NotFoundPageComponent,
    TopBarComponent,
    FooterComponent,
    RoundButtonComponent,
    CarouselComponent,
    TopCarouselComponent,
    ScrollTopButtonComponent,
    BranchCardComponent,
    ButtonToggleComponent,
    BlockFeatureComponent,
    BlockContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgScrollbarModule,
    CarouselModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    [SweetAlert2Module.forRoot()],
    TranslateModule.forRoot({
      defaultLanguage: 'vi',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MaterialModule,
    LazyloadModule,
    NgbModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      maxOpened: 10,
      timeOut: 2000,
    })
  ],
  providers: [
    {
      provide: NG_SCROLLBAR_OPTIONS,
      useValue: {
        visibility: 'hover',
        minThumbSize: 20,
        autoWidthDisabled: false,
        pointerEventsMethod: 'scrollbar'
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
