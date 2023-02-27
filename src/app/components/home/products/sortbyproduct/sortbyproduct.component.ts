import { Component, OnInit, EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sortbyproduct',
  templateUrl: './sortbyproduct.component.html',
  styleUrls: ['./sortbyproduct.component.css']
})
export class SortbyproductComponent implements OnInit {

  selectedOpt: string;
  type: Array<string>;
  @Output() changeEvent = new EventEmitter<any>();

  @ViewChild('selectSort') selectSort: ElementRef;

  constructor() { }

  ngOnInit() {
    this.type = ['Price -- Low to High','Price -- High to Low','Newest First'];
  }

  ngAfterViewInit() {
      this.firstSelect();  
  }

  ngOnChanges() {}

  firstSelect() {
    const selElement = this.selectSort.nativeElement.querySelectorAll('li');
    selElement.forEach((item:any, index:any) => {
      if (index === 0) {
        item.classList.add('active');
      }
    });
  }

  sortByFunc(event:any, index:any) {
    const allElement = event.target.parentElement.querySelectorAll('li');
    console.log('sortByFunc', allElement);
    allElement.forEach( (li:any) => {
      li.classList.remove('active');
    });
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
    } else {
      event.target.classList.remove('active');
    }
    this.selectedOpt = event.target.innerText;
    this.changeEvent.emit(this.selectedOpt);
  }

  
}


