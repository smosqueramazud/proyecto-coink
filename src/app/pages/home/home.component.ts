import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movil = false;

  constructor() { }

  ngOnInit(): void {
    this.validarScreenWidth();
  }

  
    /**
   * @method validarScreenWidth 
   * @description Metodo encargado de validar el tamaño de la pantalla del dispositivo
   * @author Sebastian Mosquera
   * @date 21/01/2023
   */
     validarScreenWidth(){
      if(screen.width <= 1024){
        this.movil = true;
      }else{
        this.movil = false
      }
      window.sessionStorage.setItem('movil', String(this.movil));
    }
}
