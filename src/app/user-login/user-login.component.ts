import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  userLogin(LoginForm:NgForm){
    this.userService.loginUser(LoginForm.value).subscribe((Response:User) =>{
      console.log(Response)
      Swal.fire('login successful')
      this.router.navigate(['/employees']);
    },error=>Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'please enter valid name and password!',
    }));
  }
}
