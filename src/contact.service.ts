import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './app/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  listChangeEvent: EventEmitter<Contact[]> = new EventEmitter();
  listOfContacts: Contact[] = [];

  getContacts() {
    return this.listOfContacts;
  }

  deleteContact(index: number) {
    this.listOfContacts.splice(index, 1);
  }

  addContact(contact: Contact) {
    this.listOfContacts.push(contact);
  }

  updateContact(index: number, contact: Contact) {
    this.listOfContacts[index] = contact;
  }

  getContact(index: number) {
    return this.listOfContacts[index];
  }

  setContacts(listOfContacts: Contact[]) {
    this.listOfContacts = listOfContacts;
    this.listChangeEvent.emit(listOfContacts);
  }
}
