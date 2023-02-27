import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.css']
})
export class QuantityControlComponent implements OnInit {

  @Input() quantity: number;
  @Output() onChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit():void { }
  plusOne = () =>{
      if (this.quantity < 1000){
          this.quantity++;
          this.onChange.emit(this.quantity);
      }
  };
  minusOne = () => {
      if (this.quantity > 1){
          this.quantity--;
          this.onChange.emit(this.quantity);
      }
  }

}
