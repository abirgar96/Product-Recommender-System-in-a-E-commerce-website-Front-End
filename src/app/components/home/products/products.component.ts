import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SubSubCategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  
  quantity: number = 1;
  products:any=[]
  collections:any=[]
  
  // products: Product[];
  filteredProducts :any= [];
  pic: string;
  nopic: string;
  option: string;
  isLoading: Boolean = true;
  imgURL: string;
  errorData: any;
  productObsv: Subscription;
  selectedSubcat: string;
  subCat = '';

  // @Output() productDetailsEvent = new EventEmitter();

  constructor(private productservice : ProductService,
    private catservice:SubSubCategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService:CartService
    // private Constants:Constants
    ) { 


  }

  
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
   
    this.LoadProducts()

    // this.getProductLists(this.subCat);
    // this.option = 'Newest First';
    // this.sortbyMessage(this.option);

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

  
   // Get Category list
   LoadProducts() {
    return this.productservice.getAllProduct().subscribe((data) => {
      this.products = data;
      this.filteredProducts=data   
    })
  }




  titleCaseWord(word: string) {
    if (!word) {
      return word;
    } else {
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
  }

  ngOnChanges() {}

  getProductLists(subCat: string) {

    this.productObsv = this.productservice.getAllProduct().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = this.products;
        if (subCat === 'all' || subCat === '') {
          console.log('subCat => ', subCat);
          this.filteredProducts = this.products;
        } else {
          console.log('subCat => ', subCat);
          this.filterBySubcat(this.selectedSubcat);
        }

        if (this.products.length === 0) {
          this.nopic = 'empty_product.svg';
        }
        this.isLoading = false;
        console.log('filtered products => ', this.filteredProducts);
      }
    );   
  }


  productDetails(id:any): void {
    this.router.navigate(['product/details/' + id]);
  }

  sortbyMessage(event:any): void {
    this.option = event;
    this.filteredProducts=this.products
    const SortBy = (x:any, y:any) => {
      if (this.option === 'Price -- Low to High') {
        return ((x.price === y.price) ? 0 : ((x.price > y.price[this.option]) ? 1 : -1));
      } else if (this.option === 'Price -- High to Low') {
        return ((x.price === y.price) ? 0 : ((x.price > y.price) ? -1 : 1));
      } else if (this.option === 'Newest First') {
        return ((x.dateOfEntry === y.dateOfEntry) ? 0 : ((x.dateOfEntry > y.dateOfEntry) ? 1 : -1));
      } else {
        return ((x.dateOfEntry === y.dateOfEntry) ? 0 : ((x.dateOfEntry > y.dateOfEntry) ? 1 : -1));
      }
    };
    this.filteredProducts.sort(SortBy);
  }

  changePrice(evt:any) {
    console.log('Price Change', evt);
    this.filteredProducts =this.products
    if (evt !== undefined) {
      const productsByPrice = this.filteredProducts.filter((elemt:any) => elemt.price>=evt[0]&& elemt.price<=evt[1]);
      this.filteredProducts = productsByPrice;
    }
  }

  checkSubcat(evt:any) {
    console.log(evt);
    this.selectedSubcat = evt;
    this.getProductLists(this.selectedSubcat);
  }

  filterBySubcat(subcat:any) {
    console.log('Choose Subcat => ', subcat);
    if (subcat !== undefined) {
      const productsByCat = this.filteredProducts.filter((elemt:any) => elemt.id_subcat.title === subcat);
      this.filteredProducts = productsByCat;
    }
  }

  ngOnDestroy() {
    this.productObsv.unsubscribe();
  }


  changeQuantity = (newQuantity:number) => {
    this.quantity = newQuantity;
  };

  addToCart = (product:any) => {
    this.cartService.addToCart({product,quantity:1})
};












}
