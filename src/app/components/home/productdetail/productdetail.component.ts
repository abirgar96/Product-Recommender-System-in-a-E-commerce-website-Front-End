import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product: any
  quantity: number = 1
  id = this.activeroute.snapshot.params.id
  constructor(private activeroute: ActivatedRoute, private cartService: CartService, private productservie: ProductService) { }

  ngOnInit(): void {
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
    this.getOneProduct()

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

  getOneProduct() {
    this.productservie.getOneProduct(this.id).subscribe(res => {
      this.product = res
    })
  }
  
  changeQuantity = (newQuantity: number) => {
    this.quantity = newQuantity;
  };

  addToCart = (product: any) => {
    if (this.quantity) {
      this.cartService.addToCart({ product, quantity: this.quantity })
    }
  };


}
