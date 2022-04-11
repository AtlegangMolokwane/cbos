import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditAddComponent } from './contact-edit-add/contact-edit-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http'


const routes: Routes =[
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  },
{
  path: 'contact-list',
  component: ContactListComponent
},
{
  path: 'contact-add',
component: ContactEditAddComponent
},
{
  path: 'contact-edit/:index',
component: ContactEditAddComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactEditAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatCardModule, 
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
