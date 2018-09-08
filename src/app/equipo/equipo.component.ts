import { Component, OnInit } from '@angular/core';
import { Jugador } from '../_interfaces/jugador';

import * as JUGADORES from './../../assets/data/jugadores.json';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombre:string = 'Felinos';
  estatus:boolean = false;
  //jugador: String="Carlos";

  jugadores:Jugador[];
  
  jugador:Jugador = {
    nombre: "Carlos",
    edad: 35,
    apodo: "felino",
    foto: "image.jpg",
    posicion: "Delantero",
    estado: false
  }

  constructor() { }

  ngOnInit() {
    this.nombre = 'Piratas';

    let arrJugadores = JUGADORES as any;
    this.jugadores = arrJugadores.data;
  }

  agregarJugador (){
    let jugador = 'Sergio';
    jugador = 'Ivan';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(event) {
    this.jugador.estado = event;
  }

}
