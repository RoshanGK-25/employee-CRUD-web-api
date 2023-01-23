import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emp } from './Models/emp.model';
import { EmployeeService } from './serices/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'employee-CRUD-web-api';

  educationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'Phd'
  ];
  employeeForm: FormGroup;
  employees:emp[];
  employeesToDisplay : emp[];

  constructor( private fb : FormBuilder, private http : HttpClient, private emp : EmployeeService ){
    this.employeeForm = fb.group({});
    this.employees = []
    this.employeesToDisplay = this.employees;
  }
  ngOnInit():void{
    this.employeeForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      phone: this.fb.control(''),
      birthdate: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control(''),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
