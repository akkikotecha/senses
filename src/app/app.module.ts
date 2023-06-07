import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ResoucesNewComponent } from './resouces-new/resouces-new.component';
import { ResourcesGalleryComponent } from './resources-gallery/resources-gallery.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminProductDetailShowComponent } from './admin-product-detail-show/admin-product-detail-show.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HtmlToPlaintextPipe } from './admin-product-detail-show/html-to-plaintext.pipe';
import { ResourcesCertificateComponent } from './resources-certificate/resources-certificate.component';
import { ResourcesDocumentComponent } from './resources-document/resources-document.component';
import { ResourcesMaterialComponent } from './resources-material/resources-material.component';


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
    ResoucesNewComponent,
    ResourcesGalleryComponent,
    AdminloginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminCategoryComponent,
    AdminProductComponent,
    AdminProductDetailComponent,
    AdminProductDetailShowComponent,
    HtmlToPlaintextPipe,
    ResourcesCertificateComponent,
    ResourcesDocumentComponent,
    ResourcesMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule,
    FormsModule, 
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }