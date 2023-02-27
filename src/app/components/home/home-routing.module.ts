import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';
import { BoxchattingComponent } from './boxchatting/boxchatting.component';
import { CartComponent } from './cart/cart.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { MapAfficheComponent } from './map-affiche/map-affiche.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [{ path: '', component: HomeComponent,
children:[

  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'products/:id', component:ProductdetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chat', component: ChatboxComponent },
  { path: 'cart', component:CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'account', component: AccountComponent},
  { path: 'profil', component: ProfileComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'map', component: MapAfficheComponent},

  {path:'**',component:ErrorComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
