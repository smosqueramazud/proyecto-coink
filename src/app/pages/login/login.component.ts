import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = '¡Bienvenido a la herramienta de registro Coink!';
  subTitle= 'Coink para tu día a día. Empieza ahorrando y cumple tus sueños con propósito.';
  user;
  password;
  userText = false;
  passwordText= false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  userInput(){
    if(this.user.length > 0){
      this.userText = true;
    }else{
      this.userText = false;
    }
  }

  userPass(){
    if(this.password.length > 0){
      this.passwordText = true;
    }else{
      this.passwordText = false;
    }
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

}
