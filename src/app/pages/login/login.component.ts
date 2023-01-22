import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = '¡Bienvenido a la herramienta de registro Coink!';
  subTitle= 'Coink para tu día a día. Empieza ahorrando y cumple tus sueños con propósito.';

  constructor() { }

  ngOnInit(): void {
  }

}
