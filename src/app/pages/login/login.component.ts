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

  /** 
   * @method userInput 
   * @description Método que se ejecuta cuando hay un cambio en el input de usuario
   * @author Sebastian Mosquera Mazud
   * @date 22/01/2023
   */
  userInput(){
    if(this.user.length > 0){
      this.userText = true;
    }else{
      this.userText = false;
    }
  }
  
  /** 
   * @method userPass 
   * @description Método que se ejecuta cuando hay un cambio en el input de contraseña
   * @author Sebastian Mosquera Mazud
   * @date 22/01/2023
   */
  userPass(){
    if(this.password.length > 0){
      this.passwordText = true;
    }else{
      this.passwordText = false;
    }
  }

    /** 
   * @method userPass 
   * @description Método que direcciona a la pantalla del home de la aplicación
   * @author Sebastian Mosquera Mazud
   * @date 22/01/2023
   */
  goHome(){
    this.router.navigateByUrl('/home');
  }

}
