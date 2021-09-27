import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CompHeaderComponent } from './components/comp-header/comp-header.component';
import { CompFooterComponent } from './components/comp-footer/comp-footer.component';
import { CompCarouselComponent } from './components/comp-carousel/comp-carousel.component';
import { CompPageHeaderComponent } from './components/comp-page-header/comp-page-header.component';
import { PageRegrasComponent } from './pages/page-regras/page-regras.component';
import { CompFlexItensComponent } from './components/comp-flex-itens/comp-flex-itens.component';
import { CompLocationComponent } from './components/comp-location/comp-location.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    CompHeaderComponent,
    CompFooterComponent,
    CompCarouselComponent,
    CompPageHeaderComponent,
    PageRegrasComponent,
    CompFlexItensComponent,
    CompLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
