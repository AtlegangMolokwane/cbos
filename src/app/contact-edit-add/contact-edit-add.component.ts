import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from 'src/contact.service';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-contact-edit-add',
  templateUrl: './contact-edit-add.component.html',
  styleUrls: ['./contact-edit-add.component.css']
})
export class ContactEditAddComponent implements OnInit {
  form!: FormGroup;
  index: number=0;
  editMode: boolean =false;
  
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute, private backendservice: BackEndService) { }

  ngOnInit(): void {
    let name = '';
    let phoneNumber = '';

    this.route.params.subscribe((paras: Params)=>{
      if(paras['index']){
        console.log("paras['index'] : ",paras['index']);

        this.index = paras['index'];
        const contact = this.contactService.getContact(this.index);
        name = contact.name;
        phoneNumber = contact.phoneNumber;
        
        this.editMode = true;
      }
    })

    this.form = new FormGroup({
      name: new FormControl(name,[Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
      phoneNumber: new FormControl(phoneNumber,[Validators.required]),
    })
  }

  onSubmit(){
    console.log("form values", this.form.value);

    const name = this.form.value.name;
    const phoneNumber = this.form.value.phoneNumber;

    const contact: Contact = new Contact(
      name,
      phoneNumber,
    );
      if(this.editMode == true){
        this.contactService.updateContact(this.index,contact);
      }else{
        this.contactService.addContact(contact);
      }
    this.router.navigate(['./contact-list'])
    this.backendservice.saveAndFetch();
  }
}
