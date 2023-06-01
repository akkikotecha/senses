import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LazyLoadingComponent } from './home/lazy-loading/lazy-loading.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ResourcesComponent } from './resources/resources.component';
import { InsightsComponent } from './insights/insights.component';
import { AboutTwoComponent } from './about-two/about-two.component';
import { InsightsTwoComponent } from './insights-two/insights-two.component';
import { ProductDetailsTwoComponent } from './product-details-two/product-details-two.component';
import { CareerComponent } from './career/career.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FindDealerComponent } from './find-dealer/find-dealer.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ZestPorudctDetailsComponent } from './zest-porudct-details/zest-porudct-details.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCategoryPageComponent } from './admin-category-page/admin-category-page.component';
import { AdminProductsPageComponent } from './admin-products-page/admin-products-page.component';
import { AdminProductDetailPageComponent } from './admin-product-detail-page/admin-product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LazyLoadingComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDataComponent,
    ResourcesComponent,
    InsightsComponent,
    AboutTwoComponent,
    InsightsTwoComponent,
    ProductDetailsTwoComponent,
    CareerComponent,
    NotFoundComponent,
    FindDealerComponent,
    ResourceDetailComponent,
    ZestPorudctDetailsComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminLoginComponent,
    DashboardComponent,
    AdminCategoryPageComponent,
    AdminProductsPageComponent,
    AdminProductDetailPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    CarouselModule,
    NgbModule,
    MDBBootstrapModule,
 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
