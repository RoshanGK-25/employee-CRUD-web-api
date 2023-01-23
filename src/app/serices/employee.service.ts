import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emp } from '../Models/emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'https://my.api.mockaroo.com/emp.json';
  db = 'emp.json';
  key = '?key=2e43f6d0';
  constructor(private http : HttpClient) { }

  getEmployee(){
    return this.http.get<emp[]>(this.baseUrl + this.db + this.key);
  }
  postEmployee(employee : emp){
    return this.http.post<emp>(this.baseUrl + this.db + this.key + '&_method=POST', employee);
  }
  deleteEmployee(id : string){
    return this.http.delete<emp>(this.baseUrl + this.db + this.key + '&_method=DELETE' + id);
  }
  putEmployee(id : string, employee : emp){
    return this.http.put<emp>(this.baseUrl + this.db + this.key + '&_method=PUT' +id, employee);
  }


}
