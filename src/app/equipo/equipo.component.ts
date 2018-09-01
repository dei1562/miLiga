import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombre:string = 'Felinos';
  estatus:boolean = false;
  jugador:string = 'Carlos';

  constructor() { }

  ngOnInit() {
    this.nombre = 'Piratas';
  }

  agregarJugador (){
    let jugador = 'Sergio';
    jugador = 'Ivan';

    this.jugador = jugador;
  }

  actualizarEstado(event) {
    this.estatus = event;
  }

}
