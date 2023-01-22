import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Personaje } from 'src/app/models/personajes';
import { EndpointsService } from 'src/app/services/endpoints.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pantallaActual = 'Inicio';
  movil = false;
  seccionFiltros = false;
  inactive = true;
  nombre;
  tipoPersonaje;
  disabledInput;
  disabledInputTipo;
  arrayFiltroPersonaje: any;
  arrayPersonajes: any;
  

  displayedColumns: string[] = ['imagen', 'nombre', 'estado', 'especie', 'ultima locacion'];
  dataSource: MatTableDataSource<Personaje>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private endpoints: EndpointsService,) { }

  ngOnInit(): void {
    this.validarScreenWidth();
    this.obtenerPersonajes();
  }

  /**
 * @method validarScreenWidth 
 * @description Metodo encargado de validar el tamaño de la pantalla del dispositivo
 * @author Sebastian Mosquera
 * @date 21/01/2023
 */
  validarScreenWidth() {
    if (screen.width <= 1024) {
      this.movil = true;
    } else {
      this.movil = false
    }
    window.sessionStorage.setItem('movil', String(this.movil));
  }

  openFilters() {
    if (this.seccionFiltros === false) {
      this.seccionFiltros = true;
    } else {
      this.seccionFiltros = false;
    }
  }

  cleanFilters() {
    this.nombre = '';
    this.tipoPersonaje = '';
    this.dataSource = new MatTableDataSource(this.arrayPersonajes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.disabledInput = false;
    this.disabledInputTipo = false;
    this.inactive = true;
  }

  cleanFiltersMovil() {
    this.nombre = '';
    this.tipoPersonaje = '';
    this.obtenerPersonajes();
    this.disabledInput = false;
    this.disabledInputTipo = false;
    this.inactive = true;
  }

  /**
 * @method obtenerPersonajes 
 * @description Metodo encargado de consumir el endpoint que trae todos los personajes
 * @author Sebastian Mosquera
 * @date 22/01/2023
 */
  obtenerPersonajes() {
    this.endpoints.getPersonajes().subscribe(
      res => {
        this.arrayPersonajes = res.results;
        this.dataSource = new MatTableDataSource(this.arrayPersonajes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err => {
        alert(`Ha ocurrido un error consultando la lista de personajes, por favor intenta de nuevo mas tarde`)
      }
    )
  }

  tipoChange(){
    if(this.tipoPersonaje.length > 0){
      this.disabledInput = true;
      this.inactive = false;
    }else{
      this.disabledInput = false;
      this.inactive = true;
    }
  }

  userChange(){
    if(this.nombre.length > 0){
      this.disabledInputTipo = true;
      this.inactive = false;
    }else{
      this.disabledInputTipo = false;
      this.inactive = true;
    }
  }

  consultarPersonaje(){
      if(this.nombre.length > 0){
        let array =  this.arrayPersonajes.filter(per => per.name == this.nombre);
        if(array.length > 0){
          this.dataSource = new MatTableDataSource(array);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }else{
          alert('Ingrese correctamente el nombre del personaje');
        }
      }else if(this.tipoPersonaje.length > 0){
        let array =  this.arrayPersonajes.filter(per => per.species == this.tipoPersonaje);
        if(array.length > 0){
          this.dataSource = new MatTableDataSource(array);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }else{
          alert('Ingrese correctamente el tipo del personaje');
        }
      }else{
        alert('Ingrese el nombre o el tipo del personaje');
      }
  }

  consultarPersonajeMovil(){
    if(this.nombre.length > 0){
      let array =  this.arrayPersonajes.filter(per => per.name == this.nombre);
      if(array.length > 0){
        this.arrayPersonajes = array;
      }else{
        alert('Ingrese correctamente el nombre del personaje');
      }
    }else if(this.tipoPersonaje.length > 0){
      let array =  this.arrayPersonajes.filter(per => per.species == this.tipoPersonaje);
      if(array.length > 0){
        this.arrayPersonajes = array;
      }else{
        alert('Ingrese correctamente el tipo del personaje');
      }
    }else{
      alert('Ingrese el nombre o el tipo del personaje');
    }
  }

}
