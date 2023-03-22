import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user:User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  userRegister(registerForm: NgForm) {
    this.userService.registerUser(registerForm.value).subscribe((Response:User) =>{
      console.log(Response)
      Swal.fire('you have been registred')
      this.router.navigate(['/employees']);
    });
  }

}
