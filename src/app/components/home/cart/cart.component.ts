import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartList: Cart[];
  public totalPrice: number=0;
  quantity=1;
  constructor(protected cartService: CartService) {
    this.loadCart();
  }


  ngOnInit():void {
    this.loadExternalScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"')
    this.loadExternalScript("assets/js/bootstrap.js")
    this.loadExternalScript("assets/js/jquery.smartmenus.js")
    this.loadExternalScript("assets/js/jquery.smartmenus.bootstrap.js")
    this.loadExternalScript("assets/js/sequence.js")
    this.loadExternalScript("assets/js/sequence-theme.modern-slide-in.js")
    this.loadExternalScript("assets/js/jquery.simpleGallery.js")
    this.loadExternalScript("assets/js/jquery.simpleLens.js")
    this.loadExternalScript("assets/js/slick.js")
    this.loadExternalScript("assets/js/nouislider.js")
    this.loadExternalScript("assets/js/custom.js")

  }
  public loadExternalScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  loadCart = () => {
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cartList = res;
        let total = 0;
        for (let cart of this.cartList) {
          total += Number(cart.product.price) * Number(cart.quantity);
        }
        this.totalPrice = total;
      })
  };
  removeFromCart = (index:any) => {
    this.cartService.removeCart(index);
  };
  
  changeQuantity = (cart:any,quantity:any) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
}
  
   
   
}
