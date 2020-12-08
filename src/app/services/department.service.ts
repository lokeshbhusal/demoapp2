import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Department } from 'src/app/models/department-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor( private http:HttpClient) { }


  formData: Department;


  readonly APIUrl = "http://gridecoreapp-env.peird25tbn.us-east-1.elasticbeanstalk.com/api";

  getDepList(): Observable<Department[]>{
    return this.http.get<Department[]>(this.APIUrl +'/department');
  }
  addDepartment(dep:Department){
    return this.http.post(this.APIUrl+'/Department',dep)
  }
}
