import { Component, ElementRef, OnInit,EventEmitter, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css']
})
export class FilterproductComponent implements OnInit {

  subCat :any[];
  minValue = 50;
  maxValue = 2000;
  options: Options = {
    floor: 0,
    ceil: 2000
  };
  priceSelection: any;
  @Output() priceVal = new EventEmitter();
  selectedOpt: string;
  @Output() chooseSubcat = new EventEmitter<any>();

  constructor(
  
    private apiService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private ren: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {  
      this.subCategories();
      this.onloadSelected();  
  }

  subCategories() {
    this.apiService.getAllCategory().subscribe((data:any) => { 
        this.subCat = data   
      }
    );
  }

  subCategories1() {
    this.apiService.getAllCategory().subscribe((data:any) => {
        const category = data.filter((elemt:any) => elemt.name === 'Phone');
        this.subCat = category
        console.log('Sub category =>', this.subCat);
      },
      err => {
        console.log(err);
      }
    );
  }

  changePrice() {
    console.log('Price', this.priceSelection);
    this.priceVal.emit(this.priceSelection);
  }

  onloadSelected() {
    this.selectedOpt = 'all';
    this.chooseSubcat.emit(this.selectedOpt);
    const allElement = this.el.nativeElement.querySelectorAll('ul.catListing');
    allElement[0].children[0].classList.add('active');
  }

  sortBySubcat(event:any) {
    const allElement = event.target.parentElement.querySelectorAll('li');
    this.selectedOpt = event.target.innerText.toLowerCase();
    allElement.forEach((element:any) => {
      element.classList.remove('active');
    });
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
    } else {
      event.target.classList.remove('active');
    }
    if (this.selectedOpt !== undefined) {
      console.log('selectedOpt => ', this.selectedOpt);
      this.chooseSubcat.emit(this.selectedOpt);
    }
  }
}
