import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //create object
//  name='John doe';
addToCart:number=0;
  product = {
    
    pname: 'Samsung',
    price: 8999,
    color: 'Black',
    discount: 10,
    inStock:5,
    productImage:'/assets/images/samsung.jpg'
    
  }
  getDiscountPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }
  onNameChange(event:any){
   // this.name=event.target.value;
    console.log(event.target.value);
    
  }
  decrementCartValue(){
   if (this.addToCart>0) {
    this.addToCart --;
   }
  }
  incrementCartValue(){
   if (this.addToCart<this.product.inStock) {
    this.addToCart++;
   }
  }
}
