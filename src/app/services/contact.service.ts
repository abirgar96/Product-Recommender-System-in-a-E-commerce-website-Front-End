import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { } 
  private apiurl=`${environment.baseUrl}/contacts`;


addContact(newContact:any){
 return this.http.post(this.apiurl,newContact)
}

getContacts(page:any){
  return this.http.get(this.apiurl+"?page="+page)
}

getContactById(id:any){
  return this.http.get(this.apiurl+"/"+id)
} 


destoryContact(id:any){
  return this.http.delete(this.apiurl+"/"+id)
} 

// updateContact(id,updateContact){
//   return this.http.put("http://localhost:3200/api/contacts/"+id,updateContact)
// }


// Contacter(sendcontact){
//   return this.http.post("http://localhost:3200/api/contacts/send",sendcontact)
// }


}
