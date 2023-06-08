import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../Shared/Models/Login';
import { AccountService } from '../Core/Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin:boolean = false;
  flag:boolean = false;
  loginData:Login = {
    email: "",
    password: ""
  }
  constructor(private accountService:AccountService, private router:Router) { }

  Login(form:NgForm){
    if (form.valid){
      this.loginData.email = form.value.email;
      this.loginData.password = form.value.password;
      this.accountService.Login(this.loginData).subscribe(data => {
        if (data){
          this.flag = true;
          setTimeout(() => {
            this.router.navigateByUrl('/');
        }, 3000);
      }
      else{
        this.invalidLogin = true;
      };
    });
    }
  }
}
