import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
  
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  SaveCategory(category:any){
    return this.http.post<Category>(`${environment.baseUrl}/categories`,category)
  }
 
  getAllCategory():Observable<Category>{
  return this.http.get<Category>(`${environment.baseUrl}/categories`)
 }

 DeleteCategory(idcat:any){
  return this.http.delete<Category>(`${environment.baseUrl}/categories/${idcat}`)
 }
 
 UpdateCategory(idcat:any,updatecategory:any){
  return this.http.put<Category>(`${environment.baseUrl}/categories/${idcat}`,updatecategory)
 }







}
