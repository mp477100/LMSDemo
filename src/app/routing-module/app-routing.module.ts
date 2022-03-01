import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from '../admin/addcourse/addcourse.component';
import { AdminComponent } from '../admin/Components/admin.component';
import { CourselistComponent } from '../admin/courselist/courselist.component';
import { PagenotfoundComponent } from '../commons/pagenotfound/pagenotfound.component';
import { SigninComponent } from '../commons/signin/signin.component';
import { SignupComponent } from '../commons/signup/signup.component';
import { UserComponent } from '../user/Components/user.component';

const routes: Routes = [
  {path : "admin",component:AdminComponent,children : [
    {path:"courselist",component:CourselistComponent},
    {path:"addcourse",component:AddcourseComponent},
  ]},
  {path : "user",component:UserComponent},
  {path : "login",component : SigninComponent},
  {path : "register",component :SignupComponent},
  {path : "",component : SigninComponent},
  {path : "**",component :PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
