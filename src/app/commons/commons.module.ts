import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    PagenotfoundComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonsModule { }
