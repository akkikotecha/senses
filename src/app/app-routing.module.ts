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
import { FindDealerComponent} from './find-dealer/find-dealer.component';
import { ResourceDetailComponent} from './resource-detail/resource-detail.component';
import { ZestPorudctDetailsComponent } from './zest-porudct-details/zest-porudct-details.component';


const routes: Routes = [{
  path : '',
  component:HomeComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:'products',
  component:ProductComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:'sub_products',
  component:ProductDetailsComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:'product_details',
  component:ProductDataComponent,
  runGuardsAndResolvers: 'always'

},
{
  path:'about_us',
  component:AboutUsComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:'resources',
  component:ResourcesComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:'resources_detail',
  component:ResourceDetailComponent,
  runGuardsAndResolvers: 'always'
},

{
  path:'insights',
  component:InsightsComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:"about_us_two",
  component:AboutTwoComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:"insights_two",
  component:InsightsTwoComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:"product_detail_two",
  component:ProductDetailsTwoComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:"zest_product_detail",
  component:ZestPorudctDetailsComponent,
  runGuardsAndResolvers: 'always'
},
{
  path:"career",
  component:CareerComponent,
  runGuardsAndResolvers: 'always'

},
{
  path:"not_found",
  component:NotFoundComponent,
  runGuardsAndResolvers: 'always'

},
{
  path:"find_dealer",
  component:FindDealerComponent,
  runGuardsAndResolvers: 'always'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
