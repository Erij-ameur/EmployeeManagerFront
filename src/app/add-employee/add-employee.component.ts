import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
employee! :Employee ;
  constructor(private employeeService: EmployeeService,
    private router:Router ) { }
 
  ngOnInit(): void {
  }

  onAddEmployee(addForm:NgForm){
    this.employeeService.addEmployee(addForm.value).subscribe((Response:Employee)=>{
      console.log(Response);
      this.router.navigate(['/employees']);
    })

  }
  
}
