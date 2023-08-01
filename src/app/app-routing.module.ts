import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
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
import { ResourcesGalleryComponent } from './resources-gallery/resources-gallery.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { AdminProductDetailShowComponent } from './admin-product-detail-show/admin-product-detail-show.component';
import { ResourcesCertificateComponent } from './resources-certificate/resources-certificate.component';
import { ResourcesMaterialComponent } from './resources-material/resources-material.component';
import { ResourcesDocumentComponent } from './resources-document/resources-document.component';
import { AdminHomeBannerComponent } from './admin-home-banner/admin-home-banner.component';
import { AdminResourceTypeComponent } from './admin-resource-type/admin-resource-type.component';
import { AdminResourceSubtypeComponent } from './admin-resource-subtype/admin-resource-subtype.component';
import { AdminResouceComponent } from './admin-resource/admin-resouce.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { FeaturedProjectService } from './featured-projects/featured-project.service';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FeatureProjectViewAllComponent } from './feature-project-view-all/feature-project-view-all.component';
import { FeatureProductShowDetailComponent } from './feature-product-show-detail/feature-product-show-detail.component';
import { AdminBlogNewsComponent } from './admin-blog-news/admin-blog-news.component';
import { BlogAndNewsShowDetailsComponent } from './blog-and-news-show-details/blog-and-news-show-details.component';
import { AdminletstalkComponent } from './adminletstalk/adminletstalk.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsofuserComponent } from './termsofuser/termsofuser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'products',
    component: ProductComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'products/:name',
    component: ProductDetailsComponent,
    runGuardsAndResolvers: 'always',
  },
  // {
  //   path: 'product_details',
  //   component: ProductDataComponent,
  //   runGuardsAndResolvers: 'always',
  // },
  // {
  //   path: 'about_us',
  //   component: AboutUsComponent,
  //   runGuardsAndResolvers: 'always',
  // },
  {
    path: 'resources',
    component: ResourceDetailComponent,
    runGuardsAndResolvers: 'always',
  },
  // {
  //   path: 'resources_detail',
  //   component: ResourcesComponent,
  //   runGuardsAndResolvers: 'always',
  // },
  {
    path: 'resources-gallery',
    component: ResourcesGalleryComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'resources-certifications',
    component: ResourcesDocumentComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'resources-materials',
    component: ResourcesDocumentComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'resources-documents',
    component: ResourcesDocumentComponent,
    runGuardsAndResolvers: 'always',
  },
  // {
  //   path: 'insights_two',
  //   component: InsightsComponent,
  //   runGuardsAndResolvers: 'always',
  // },
  {
    path: 'about-us',
    component: AboutTwoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'locate-us',
    component: AboutTwoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'insights',
    component: InsightsTwoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'insights/:paramName',
    component: InsightsTwoComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'product/:name',
    component: ProductDetailsTwoComponent,
    runGuardsAndResolvers: 'always',
  },
  // {
  //   path: 'zest_product_detail',
  //   component: ZestPorudctDetailsComponent,
  //   runGuardsAndResolvers: 'always',
  // },
  {
    path: 'career',
    component: CareerComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'not_found',
    component: NotFoundComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'find_dealer',
    component: FindDealerComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_login',
    component: AdminLoginComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_dashboard',
    component: AdminDashboardComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_product',
    component: AdminCategoryComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_sub_product',
    component: AdminProductComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_product_detail',
    component: AdminProductDetailComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_product_detail_show',
    component: AdminProductDetailShowComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_home_banner',
    component: AdminHomeBannerComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_resource_type',
    component: AdminResourceTypeComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_resource_sub_type',
    component: AdminResourceSubtypeComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_resource',
    component: AdminResouceComponent,
    runGuardsAndResolvers: 'always',
  },

  {
    path: 'admin_featured_project',
    component: FeaturedProjectsComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_featured_product',
    component: FeaturedProductsComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'featured_project_view_all',
    component: FeatureProjectViewAllComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'project-case/:name',
    component: FeatureProductShowDetailComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_blog_news',
    component: AdminBlogNewsComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'blogs/:name',
    component: BlogAndNewsShowDetailsComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'admin_lets_talk',
    component: AdminletstalkComponent,

    runGuardsAndResolvers: 'always',
  },
  {
    path: 'terms-and-conditions',
    component: TermsofuserComponent,
  },
  {
    path: 'privacy-cookie-policy',
    component: PrivacyPolicyComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'faq',
    component: FaqComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'warranty-statement',
    component: WarrantyComponent,
    runGuardsAndResolvers: 'always',
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }, // Wildcard route, must be the last one
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
