import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterproductComponent } from './products/filterproduct/filterproduct.component';
import { SortbyproductComponent } from './products/sortbyproduct/sortbyproduct.component';
import { Ng5SliderModule } from 'ng5-slider';
import { QuantityControlComponent } from './products/quantity-control/quantity-control.component';
import { LoginuoComponent } from './loginuo/loginuo.component';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ProfileComponent } from './profile/profile.component';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
  declarations: [
     HomeComponent, FooterComponent, 
     HeaderComponent, IndexComponent, ProductsComponent,
     ProductdetailComponent, ContactComponent,
     BlogComponent, AccountComponent, CartComponent, 
     CheckoutComponent, AboutComponent, 
    WishlistComponent, ErrorComponent, 
    FilterproductComponent,
     SortbyproductComponent,
      QuantityControlComponent,
        LoginuoComponent,  
        ProfileComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    SocialLoginModule,
    QRCodeModule

  ],
  providers:[

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
