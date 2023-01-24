import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { emp } from './Models/emp.model';
import { EmployeeService } from './serices/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'employee-CRUD-web-api';
  // @ViewChild('fileInput') fileInput : any;
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

    this.emp.getEmployee().subscribe(res =>{
      console.log(res);
    });
    // this.emp.postEmployee().
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  addEmployee(){
    let employee : emp = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      birthdate: this.birthdate.value,
      gender: this.gender.value,
      education: this.educationOptions[parseInt(this.education.value)],
      company: this.company.value,
      jobExperience: this.jobExperience.value,
      salary: this.salary.value
    }
    this.emp.postEmployee(employee).subscribe(res => {
      this.employees.unshift(res);
      this.clearForm();
    })
  }

  clearForm(){
    this.firstName.setValue(''); 
    this.lastName.setValue(''); 
    this.birthdate.setValue(''); 
    this.gender.setValue(''); 
    this.education.setValue(''); 
    this.company.setValue(''); 
    this.jobExperience.setValue(''); 
    this.salary.setValue(''); 
  }

  public get firstName():FormControl{
    return this.employeeForm.get('firstName') as FormControl;
  }
  public get lastName():FormControl{
    return this.employeeForm.get('lastName') as FormControl;
  }
  public get birthdate():FormControl{
    return this.employeeForm.get('birthdate') as FormControl;
  }
  public get gender():FormControl{
    return this.employeeForm.get('gender') as FormControl;
  }
  public get education():FormControl{
    return this.employeeForm.get('education') as FormControl;
  }
  public get company():FormControl{
    return this.employeeForm.get('company') as FormControl;
  }
  public get jobExperience():FormControl{
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get salary():FormControl{
    return this.employeeForm.get('salary') as FormControl;
  }
}
