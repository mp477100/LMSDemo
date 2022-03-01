import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Components/admin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourselistComponent } from './courselist/courselist.component';
import { RouterModule } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AdminComponent, AddcourseComponent, CourselistComponent, ViewcourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    HttpClientModule
  ],
  providers:[AdminService],
  exports : [AdminComponent]
})
export class AdminModule { }
