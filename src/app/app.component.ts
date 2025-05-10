import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_18_CRUD';


  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: any[] = [];

  constructor()
  {
  
  }
  ngOnInit(): void {
      this.createForm()

    const oldData= localStorage.getItem("EmpData");
  if (oldData != null)
  {
    const parseData = JSON.parse(oldData);
    this.employeeList = parseData;
  }
  }

  createForm()
  {
    this.employeeForm = new FormGroup({

      empid: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailId: new FormControl(this.employeeObj.emailId),
      pincode: new FormControl(this.employeeObj.pincode),
      state: new FormControl(this.employeeObj.state),
    })
  }
onSave()
{

  const oldData= localStorage.getItem("EmpData");
  if (oldData != null)
  {
    const parseData = JSON.parse(oldData);
    this.employeeForm.controls['empid'].setValue(parseData.length +1);
    this.employeeList.unshift(this.employeeForm.value);
  }
  else{
    this.employeeList.unshift(this.employeeForm.value);
   
  }
  localStorage.setItem("EmpData", JSON.stringify(this.employeeList))
}
}
