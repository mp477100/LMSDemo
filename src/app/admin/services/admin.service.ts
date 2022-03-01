import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminService
{
    getCourses() {
      throw new Error('Method not implemented.');
    }
    constructor(private _http : HttpClient)
    {

    }

    addCourse(course:any)
    {
        return this._http.post("http://localhost:8080/LMSDemo/api/admin/course",course).toPromise();
    }

    getCourse()
    {
        return this._http.get("http://localhost:8080/LMSDemo/api/admin/course").toPromise();
    }

    getCourseById(id:Number)
    {
        return this._http.get("http://localhost:8080/LMSDemo/api/admin/course/${ids}").toPromise();
    }
}

