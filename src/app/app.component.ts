import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


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
  employeeForm: any;

  constructor( private fb : FormBuilder ){

  }
  ngOnInit():void{
    this.employeeForm = this.fb.group({
      firstName: this.fb.control('firstName'),
      lastName: this.fb.control('lastName'),
      email: this.fb.control('email'),
      phone: this.fb.control('phone'),
      birthdate: this.fb.control('birthday'),
      gender: this.fb.control('gender'),
      education: this.fb.control('education'),
      company: this.fb.control('company'),
      jobexperience: this.fb.control('jobexperience'),
      salary: this.fb.control('salary'),
    });
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
