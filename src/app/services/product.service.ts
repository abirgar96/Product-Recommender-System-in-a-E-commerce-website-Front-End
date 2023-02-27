import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  SaveProduct(product:any){
    return this.http.post<Product>(`${environment.baseUrl}/products`,product)
  }
 
  getAllProduct():Observable<Product>{
  return this.http.get<Product>(`${environment.baseUrl}/products`).pipe(
    map(((response:any) => response.map((product: Product) => new Product().deserialize(product))))
  );
 }

 getOneProduct(idproduct:any):Observable<Product>{
  return this.http.get<Product>(`${environment.baseUrl}/products/${idproduct}`).
  pipe(map(response => new Product().deserialize(response)))
 }

 DeleteProduct(idproduct:any){
  return this.http.delete<Product>(`${environment.baseUrl}/products/${idproduct}`)
 }
 
 UpdateProduct(idproduct:any,updateProduct:any){
  return this.http.put<Product>(`${environment.baseUrl}/products/${idproduct}`,updateProduct)
 }

}
