import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id;
  password;
  message="";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user_id);
    console.log(this.password);
    if(this.user_id=='harsha.jasti@mu-sigma.com' && this.password=="jasti"){
      this.message="";
      this.router.navigate(['/landing_page'])
    }
    else{
      this.message = "Invalid Credentials, please try again."
    }
  }

}
