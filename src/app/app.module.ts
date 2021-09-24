import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CompHeaderComponent } from './components/comp-header/comp-header.component';
import { CompFooterComponent } from './components/comp-footer/comp-footer.component';
import { CompCarouselComponent } from './components/comp-carousel/comp-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    CompHeaderComponent,
    CompFooterComponent,
    CompCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
