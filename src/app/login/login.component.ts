import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private myservice:UserService, private toastr: ToastrService,private router:Router,
  ){}
  login:User=new User();

  user1(){
    console.log(this.login);
    this.myservice.userlogin(this.login)
    .subscribe(data=>{
      this.toastr.success('Login Successfully');
      sessionStorage.setItem("islogin","true")
      //this.myservice.setLoggedIn(true);
      this.router.navigate(['/dashbord'])

    },
    error=>this.toastr.error('You Enter Wrong Username or Password')
    )
  }
}
