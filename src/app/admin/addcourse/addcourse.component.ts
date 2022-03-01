import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  message : String = "";

  ngOnInit(): void {
  }

  addCourse(course:any)
  {
    this.adminService.addCourse(course)
    .then(response=>{
      let object = JSON.parse(JSON.stringify(response));
      this.message = object.message;
    })
    .catch(error=>{
      let object = JSON.parse(JSON.stringify(error));
      this.message = error.message;
    });
    
  }
}
