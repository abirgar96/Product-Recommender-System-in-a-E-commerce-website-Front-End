import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubSubCategoryService {

  constructor(private http:HttpClient) { }

  SaveSubCategory(SubCategory:any){
    return this.http.post<SubCategory>(`${environment.baseUrl}/subcategories`,SubCategory)
  }
 
  getAllSubCategory():Observable<SubCategory>{
  return this.http.get<SubCategory>(`${environment.baseUrl}/subcategories`)
 }

 DeleteSubCategory(idsubcat:any){
  return this.http.delete<SubCategory>(`${environment.baseUrl}/subcategories/${idsubcat}`)
 }
 
 UpdateSubCategory(idsubcat:any,updateSubCategory:any){
  return this.http.put<SubCategory>(`${environment.baseUrl}/subcategories/${idsubcat}`,updateSubCategory)
 }

}
