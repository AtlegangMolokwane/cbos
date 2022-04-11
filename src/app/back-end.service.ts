import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ContactService } from 'src/contact.service';
import { Contact } from './contact.model';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private contactService: ContactService, private http: HttpClient) {}
  // function 1

  saveData() {
    const listOfContacts: Contact[] = this.contactService.getContacts();
    this.http.put('https://cbos123-cd174-default-rtdb.firebaseio.com/posts.json',listOfContacts)
    .subscribe((res)=>{
        console.log("Response",res);
    })
  }

  fetchData() {
    this.http.get<Contact[]>('https://cbos123-cd174-default-rtdb.firebaseio.com/posts.json')
    .pipe(
        tap((listOfContacts: Contact[])=>{
        console.log("listOfPosts",listOfContacts);
        this.contactService.setContacts(listOfContacts)
    })).subscribe();
  }

  saveAndFetch(){
    const listOfContacts: Contact[] = this.contactService.getContacts();
    this.http.put('https://cbos123-cd174-default-rtdb.firebaseio.com/posts.json',listOfContacts)
    .subscribe((res)=>{
        console.log("Response",res);
        this.http.get<Contact[]>('https://cbos123-cd174-default-rtdb.firebaseio.com/posts.json')
    .pipe(
        tap((listOfContacts: Contact[])=>{
        console.log("listOfPosts",listOfContacts);
        this.contactService.setContacts(listOfContacts)
    })).subscribe();
    })
  }
}
