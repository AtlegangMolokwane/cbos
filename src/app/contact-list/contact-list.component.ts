import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from 'src/contact.service';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  listOfContacts: Contact[] = [];

  constructor(private backendservice: BackEndService, private contactService: ContactService,private router: Router) { }

  ngOnInit(): void {
    this.listOfContacts = this.contactService.getContacts();
    this.contactService.listChangeEvent.subscribe((listOfContacts : Contact[])=>{
      console.log("listOfContacts : ",listOfContacts);
      this.listOfContacts = this.contactService.getContacts();
    });
this.backendservice.fetchData()
  }
  onDelete(index: number){
    this.contactService.deleteContact(index)
    this.backendservice.saveData()
 }
 onEdit(index: number, contact: Contact){
   this.router.navigate(["/contact-edit", index]),
   this.contactService.updateContact(index,contact)
 }

}
