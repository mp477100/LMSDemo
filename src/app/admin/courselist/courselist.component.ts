import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses:[{cid:Number,cname:String,cprice:Number,ccategory:String}] = [{cid:0,cname:"",cprice:0,ccategory:""}];
  
  constructor(private service : AdminService) { }

  ngOnInit(): void {
  
    this.service.getCourses()
    .then(response =>{
      let object = JSON.parse(JSON.stringify(response));
      this.courses = object.payload;
    })
  }

}
