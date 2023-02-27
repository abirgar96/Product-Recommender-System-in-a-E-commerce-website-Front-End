import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public collapse: boolean = false;
  public cart_num:number;
  car_list:any
  total:number=0
  constructor(
      private cartService: CartService
  ) { }

 
  toggleCartPopup = (event:any) => {
      event.preventDefault();
      event.stopPropagation();
      this.cartService.toggleCart()
  }

  ngOnInit(){


    this.cartService.cartListSubject
    .subscribe(res => {
        this.car_list=res
        this.cart_num = res.length;
        let total = 0;
        for (let cart of this.car_list) {
          total += Number(cart.product.price) * Number(cart.quantity);
        }
        this.total = total;

    })

    this.loadExternalScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"') 
   this.loadExternalScript("assets/frontend/js/bootstrap.js") 
   this.loadExternalScript("assets/frontend/js/jquery.smartmenus.js")  
   this.loadExternalScript("assets/frontend/js/jquery.smartmenus.bootstrap.js")     
   this.loadExternalScript("assets/frontend/js/sequence.js")
   this.loadExternalScript("assets/frontend/js/sequence-theme.modern-slide-in.js")     
   this.loadExternalScript("assets/frontend/js/jquery.simpleGallery.js")
   this.loadExternalScript("assets/frontend/js/jquery.simpleLens.js")
   this.loadExternalScript("assets/frontend/js/slick.js")
   this.loadExternalScript("assets/frontend/js/nouislider.js")
   this.loadExternalScript("assets/frontend/js/custom.js") 

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

 isAuthentificated(){
   return localStorage.getItem("state")?true:false
 }
}
