import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path: 'employees', component:EmployeeListComponent},
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'login' , component:UserLoginComponent},
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'employee-details/:id', component:EmployeeDetailsComponent},
  {path:'register',component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
