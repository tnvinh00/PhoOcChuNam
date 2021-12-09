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

// Import Components
import { MaterialModule } from './material.module';
import { TopBarComponent } from 'components/top-bar/top-bar.component';
import { FooterComponent } from 'components/footer/footer.component';
import { RoundButtonComponent } from 'components/button/round-button/round-button.component';
import { HomePageComponent } from 'pages/HomePage/HomePage.component';
import { MenuPageComponent } from 'pages/MenuPage/MenuPage.component';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuPageComponent,
    TopBarComponent,
    FooterComponent,
    RoundButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgScrollbarModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vn',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MaterialModule,
    NgbModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      maxOpened: 2,
      timeOut: 2000,
    })
  ],
  providers: [
    {
      provide: NG_SCROLLBAR_OPTIONS,
      useValue: {
        visibility: 'hover',
        minThumbSize: 20
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
