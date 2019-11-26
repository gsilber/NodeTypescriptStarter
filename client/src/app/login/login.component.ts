import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Credentials: ", this.form.username, this.form.password);
  }

}
